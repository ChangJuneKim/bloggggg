import { Box } from '@/components/base';
import { PostCard } from '@/components/block';
import { format } from 'date-fns';
import { Post } from '@/contentlayer/generated';
import { postsSection } from '@/app/posts/(posts)/layout.css';
import { CategoryType } from '@/components/block/PostCard/Category';
import { CategoryPostsPageProps } from '@/app/posts/(posts)/categories/[category]/pages/[page]/page';

interface PostsSectionProps {
  chunkedPosts: Array<Post>;
  searchParams: CategoryPostsPageProps['searchParams'];
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
              category={category as CategoryType}
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
