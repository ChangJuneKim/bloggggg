'use client';

import { Box } from '@/components/base';
import { SkipNavContent } from '@/components/a11y';
import usePosts from '@/hooks/usePosts';
import { Pagination, PostsSection } from '@/components/block';

export default function PostsPage() {
  const { allPosts, uniqueTagTitles, chunkedPosts } = usePosts();
  // const searchParams = useSearchParams();
  // const currentPage = Number(searchParams.get('page')) || 1;

  return (
    <SkipNavContent variant={'hero'}>
      <h2>전체 포스트 목록을 살펴보세요.</h2>
      <Box>
        {uniqueTagTitles.map((tag) => (
          <span key={tag}>{tag}태그 </span>
        ))}
      </Box>
      <PostsSection chunkedPosts={chunkedPosts} />
      <Pagination total={allPosts.length} />
    </SkipNavContent>
  );
}
