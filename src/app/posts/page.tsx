import { MyLink } from '@/components/base';
import { descAllPosts } from '@/utils/posts';

export default function PostsPage() {
  return (
    <>
      포스트 페이지다요
      {descAllPosts.map((post) => (
        <MyLink href={post.url} key={post._id} mx="2">
          {post.title}
        </MyLink>
      ))}
    </>
  );
}
