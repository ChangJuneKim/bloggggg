import { Box } from '@/components/base';
import { PostCard } from '@/components/block';
import { format } from 'date-fns';
import { Post } from '@/contentlayer/generated';
import { PostsPageProps } from '@/app/posts/(posts)/pages/[page]/page';
import { postsSection } from '@/app/posts/(posts)/layout.css';

interface PostsSectionProps {
  chunkedPosts: Array<Post>;
  searchParams: PostsPageProps['searchParams'];
}
export default function PostsSection({ chunkedPosts }: PostsSectionProps) {
  return (
    <Box as={'section'} className={postsSection}>
      <Box as={'ul'}>
        {(chunkedPosts || []).map((post) => {
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
