import { postsSection } from '@/app/posts/layout.css';
import { Box } from '@/components/base';
import { PostCard } from '@/components/block';
import { format } from 'date-fns';
import { useSearchParams } from 'next/navigation';
import { Post } from '@/contentlayer/generated';

export default function PostsSection({ chunkedPosts }: { chunkedPosts: Array<Array<Post>> }) {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  return (
    <Box as={'section'} className={postsSection}>
      <Box as={'ul'}>
        {(chunkedPosts[currentPage - 1] || []).map((post) => {
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
    </Box>
  );
}
