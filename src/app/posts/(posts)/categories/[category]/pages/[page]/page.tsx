import { Box } from '@/components/base';
import { Pagination, PostsSection } from '@/components/block';
import { chunkArray, getPostsByCategory } from '@/utils/posts';
import { CategoryType } from '@/components/block/PostCard/Category';
import siteConfig from '@/site.config';

export const dynamic = 'error';

type Params = {
  category: 'all' | CategoryType;
  page: string;
};
export interface CategoryPostsPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
  params: Params;
}

export default function CategoryPostsPage({ searchParams, params }: CategoryPostsPageProps) {
  const { page = '1', category = 'all' } = params;
  const postsByCategory = getPostsByCategory()[category] ?? [];
  const postCount = postsByCategory.length;

  const chunkedPosts = chunkArray({ items: postsByCategory, perItems: siteConfig.postsPerPage })[
    Number(page || 1) - 1
  ];

  return (
    <>
      <Box>
        <p>
          총 <b>{postCount}개</b>의 글이 있습니다.
        </p>
      </Box>
      <PostsSection chunkedPosts={chunkedPosts} searchParams={searchParams} />
      <Pagination total={postCount} page={page} />
    </>
  );
}

export async function generateMetadata({ params: { page, category } }: { params: Params }) {
  let cate;
  switch (category) {
    case 'dev':
      cate = '개발';
      break;
    case 'life':
      cate = '일상';
      break;
    case 'fire':
      cate = '삽질';
      break;
    case 'all':
      cate = '전체';
      break;
    default:
      cate = '전체';
  }

  return {
    title: `Posts ${cate} ${page} 페이지`,
    description: `블로그 ${cate} 카테고리의 ${page} 페이지 입니다.`,
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
    const numberOfPages = Math.ceil(postsByCategory[category].length / siteConfig.postsPerPage);
    const pages = Array.from({ length: numberOfPages }, (_, i) => ({ category, page: `${i + 1}` }));
    paths.push(...pages);
  });

  return paths;
};
