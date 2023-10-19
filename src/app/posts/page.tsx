import { allPosts } from '@/contentlayer/generated';
import { MyLink } from '@/components/base';

export default function PostsPage() {
  return (
    <>
      포스트 페이지다요
      {allPosts.map((post) => (
        <MyLink href={post.url} key={post._id} mx="2">
          {post.title}
        </MyLink>
      ))}
    </>
  );
}
