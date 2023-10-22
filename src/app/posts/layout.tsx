import { mdxSection } from '@/app/posts/layout.css';

export default function PostsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>일단 ㅇㅇ</h1>
      <section className={mdxSection}>{children}</section>
    </>
  );
}
