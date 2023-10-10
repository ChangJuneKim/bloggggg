import { allPosts } from '@/contentlayer/generated';
import Link from 'next/link';

export default function PostsPage() {
  return (
    <div>
      포스트 페이지다요
      {allPosts.map((post) => (
        <Link href={post.url} key={post._id}>
          {post.title}
        </Link>
      ))}
    </div>
  );
}
