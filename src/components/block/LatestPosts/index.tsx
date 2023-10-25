import { Box } from '@/components/base';
import { postsSection } from '@/app/posts/layout.css';
import usePosts from '@/hooks/usePosts';
import { PostCard } from '@/components/block';
import { format } from 'date-fns';
import { SecondaryButton } from '@/components/extended';

export default function LatestPosts() {
  const { allPosts } = usePosts();
  return (
    <Box as={'section'} className={postsSection}>
      <h3>최신 포스트</h3>
      <Box as={'ul'}>
        {allPosts.slice(0, 5).map((post) => {
          const { category, title, description, url, createdAt, readingTime, thumbnail } = post;
          return (
            <PostCard
              key={title}
              category={category as 'DEV' | 'LIFE' | 'FIRE'}
              title={title}
              desc={description}
              createdAt={format(new Date(createdAt), 'yyyy년 MM월 dd일')}
              readingTime={readingTime._readingTime}
              thumbnail={thumbnail}
              url={url}
            />
          );
        })}
      </Box>
      <Box display={'flex'} justifyContent={'flex-end'} marginTop={'8'} marginBottom={'8'}>
        <SecondaryButton to={'/posts'}>All Posts</SecondaryButton>
      </Box>
    </Box>
  );
}
