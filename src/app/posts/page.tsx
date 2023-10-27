'use client';

import { SkipNavContent } from '@/components/a11y';
import usePosts from '@/hooks/usePosts';
import { PrimaryButton } from '@/components/extended';
import { Box } from '@/components/base';

export default function PostsPage() {
  const { allPosts, uniqueTagTitles, chunkedPosts } = usePosts();
  // const searchParams = useSearchParams();
  // const currentPage = Number(searchParams.get('page')) || 1;

  return (
    <SkipNavContent variant={'hero'}>
      {/*<Box>*/}
      {/*  {uniqueTagTitles.map((tag) => (*/}
      {/*    <span key={tag}>{tag}태그 </span>*/}
      {/*  ))}*/}
      {/*</Box>*/}
      {/*<PostsSection chunkedPosts={chunkedPosts} />*/}
      {/*<Pagination total={allPosts.length} />*/}
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        __height={'80vh'}
      >
        <Box as={'h1'} fontSize={'2xl'} marginBottom={'4'}>
          블로그 이사 중 입니다. 🚚💨
        </Box>
        <PrimaryButton to={'https://window6kim.tistory.com/'} buttonType={'external'}>
          티스토리
        </PrimaryButton>
      </Box>
    </SkipNavContent>
  );
}
