import { Box } from '@/components/base';
import { PrimaryButton } from '@/components/extended';
import { PostCard } from '@/components/block';
import { format } from 'date-fns';
import { postsSection } from '@/app/posts/(posts)/layout.css';
import { descAllPosts } from '@/utils/posts';
import { CategoryType } from '@/components/block/PostCard/Category';
import siteConfig from '@/site.config';

export default function LatestPosts() {
  const sortedPosts = descAllPosts();
  return (
    <Box as={'section'} className={postsSection}>
      <h3>최신 포스트</h3>
      <Box as={'ul'}>
        {sortedPosts.slice(0, 5).map((post) => {
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
      <Box display={'flex'} justifyContent={'flex-end'} marginTop={'8'} marginBottom={'8'}>
        <PrimaryButton to={siteConfig.nav[0].link}>All Posts</PrimaryButton>
      </Box>
    </Box>
  );
}
