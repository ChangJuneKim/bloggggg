import { postsSection } from '@/app/posts/layout.css';
import { Box } from '@/components/base';
import { PostCard } from '@/components/block';
import { format } from 'date-fns';
import { Post } from '@/contentlayer/generated';
import { PostsPageProps } from '@/app/posts/page';

interface PostsSectionProps {
  chunkedPosts: Array<Array<Post>>;
  searchParams: PostsPageProps['searchParams'];
}
export default function PostsSection({ chunkedPosts, searchParams }: PostsSectionProps) {
  // const searchParams = useSearchParams();

  const currentPage = Number(searchParams.page) || 1;

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
