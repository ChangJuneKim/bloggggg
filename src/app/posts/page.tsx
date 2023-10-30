import { SkipNavContent } from '@/components/a11y';
import usePosts from '@/hooks/usePosts';
import { Box } from '@/components/base';
import { Pagination, PostsSection } from '@/components/block';
import Hero from '@/components/block/Hero';

export interface PostsPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}
export default function PostsPage({ searchParams }: PostsPageProps) {
  const { allPosts, chunkedPosts } = usePosts();
  const postCount = allPosts.length;

  console.log();
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
        <Pagination total={allPosts.length} />
        {/*</Suspense>*/}
      </SkipNavContent>
    </>
  );
}
