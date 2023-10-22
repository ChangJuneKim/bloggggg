import { Box, MyLink } from '@/components/base';
import { descAllPosts } from '@/utils/posts';
import { SkipNavContent } from '@/components/a11y/SkipNav';

export default function PostsPage() {
  return (
    <SkipNavContent variant={'hero'}>
      포스트 페이지다요
      {descAllPosts.map((post) => (
        <Box as={'article'} key={post._id}>
          <MyLink href={post.url} mx="2">
            {post.title}
          </MyLink>
        </Box>
      ))}
    </SkipNavContent>
  );
}
