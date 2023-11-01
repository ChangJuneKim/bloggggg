import { Box } from '@/components/base';
import { Pagination, PostsSection } from '@/components/block';
import { allPosts } from '@/contentlayer/generated';
import { POSTS_PER_PAGE } from '@/constants/post';
import { chunkArray, descAllPosts } from '@/utils/posts';

export const dynamic = 'error';
export interface PostsPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
  params: {
    page: string;
  };
}
export default function PostsPage({ searchParams, params: { page } }: PostsPageProps) {
  const sortedPosts = descAllPosts();
  const postCount = sortedPosts.length;

  const chunkedPosts = chunkArray({ items: sortedPosts, perItems: POSTS_PER_PAGE })[
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

export const generateStaticParams = async () => {
  return [
    ...Array.from({ length: Math.ceil(allPosts.length / POSTS_PER_PAGE) }, (_, i) => i + 1),
  ].map((v) => ({ page: `${v}` }));
};
