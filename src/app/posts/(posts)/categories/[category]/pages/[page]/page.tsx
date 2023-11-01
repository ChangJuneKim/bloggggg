import { SkipNavContent } from '@/components/a11y';
import usePosts from '@/hooks/usePosts';
import { Box } from '@/components/base';
import { Pagination, PostsSection } from '@/components/block';
import Hero from '@/components/block/Hero';
import { allPosts } from '@/contentlayer/generated';
import { POSTS_PER_PAGE } from '@/constants/post';
import chunkArray from '@/utils/chunkArray';

export const dynamic = 'error';
export interface PostsPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
  params: {
    page: string;
  };
}
export default function PostsPage({ searchParams, params: { page } }: PostsPageProps) {
  const { allPosts: sortedPosts } = usePosts();
  const postCount = sortedPosts.length;

  const chunkedPosts = chunkArray({ items: sortedPosts, perItems: POSTS_PER_PAGE })[
    Number(page || 1) - 1
  ];

  return (
    <>
      <Hero
        title={'📃 Posts'}
        desc={['개발 글 만이 아닌 다양한 주제의 글이 게시될 예정입니다.', '재밌게 봐주세요.']}
        image={{ alt: '포스트 페이지 배경', filename: 'posts.webp' }}
      />
      <SkipNavContent variant={'hero'}>
        <Box>
          <p>
            총 <b>{postCount}개</b>의 글이 있습니다.
          </p>
        </Box>
        {/*<Suspense fallback={<Fallback />}>*/}
        <PostsSection chunkedPosts={chunkedPosts} searchParams={searchParams} />
        {/*</Suspense>*/}
        {/*<Suspense fallback={<Fallback />}>*/}
        <Pagination total={sortedPosts.length} page={page} />
        {/*</Suspense>*/}
      </SkipNavContent>
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
