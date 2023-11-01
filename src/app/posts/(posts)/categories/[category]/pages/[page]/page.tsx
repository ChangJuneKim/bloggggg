import { Box } from '@/components/base';
import { Pagination, PostsSection } from '@/components/block';
import { POSTS_PER_PAGE } from '@/constants/post';
import { chunkArray, getPostsByCategory } from '@/utils/posts';
import { CategoryType } from '@/components/block/PostCard/Category';

export const dynamic = 'error';
export interface CategoryPostsPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
  params: {
    category: 'all' | CategoryType;
    page: string;
  };
}

export default function CategoryPostsPage({
  searchParams,
  params: { page, category = 'dev' },
}: CategoryPostsPageProps) {
  const postsByCategory = getPostsByCategory()[category] ?? [];
  const postCount = postsByCategory.length;

  const chunkedPosts = chunkArray({ items: postsByCategory, perItems: POSTS_PER_PAGE })[
    Number(page || 1) - 1
  ];

  return (
    <>
      <Box>
        <p>
          총 <b>{postCount}개</b>의 글이 있습니다.
        </p>
      </Box>
      {/*<Suspense fallback={<Fallback />}>*/}
      <PostsSection chunkedPosts={chunkedPosts} searchParams={searchParams} />
      {/*</Suspense>*/}
      {/*<Suspense fallback={<Fallback />}>*/}
      <Pagination total={postCount} page={page} />
      {/*</Suspense>*/}
    </>
  );
}

export async function generateMetadata({ params: { page } }: { params: { page: string } }) {
  return {
    title: `김창준 | Posts Page ${page}`,
  };
}

type PathParams = {
  category: string;
  page: string;
};

export const generateStaticParams = async () => {
  const postsByCategory = getPostsByCategory();

  const paths: Array<PathParams> = [];

  Object.keys(postsByCategory).forEach((category) => {
    const numberOfPages = Math.ceil(postsByCategory[category].length / POSTS_PER_PAGE);
    const pages = Array.from({ length: numberOfPages }, (_, i) => ({ category, page: `${i + 1}` }));
    paths.push(...pages);
  });

  return paths;
};
