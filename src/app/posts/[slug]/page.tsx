import { format, parseISO } from 'date-fns';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { allPosts } from '@/contentlayer/generated';
import { MyLink } from '@/components/base';
import { MDXComponents } from 'mdx/types';
import Link from 'next/link';

interface Props {
  params: {
    slug: string;
  };
}
const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
};

const PostPage = ({ params }: Props) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  // 현재 글의 인덱스
  const currentIndex = allPosts.findIndex((post) => post._raw.flattenedPath === params.slug);
  // 이전 글과 다음 글의 인덱스
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  const Content = useMDXComponent(post?.body.code || '');

  return (
    <>
      <article>
        <div>
          <time dateTime={post?.createdAt}>
            {format(parseISO(post?.createdAt as string), 'LLLL d, yyyy')}
          </time>
          <h1>{post?.title}</h1>
        </div>
        <Content components={mdxComponents} />
      </article>
      <div>
        {prevPost && <MyLink href={prevPost.url}>← {prevPost.title}</MyLink>}
        {nextPost && <MyLink href={nextPost.url}>{nextPost.title} →</MyLink>}
      </div>
    </>
  );
};

export default PostPage;

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: Props) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return { title: post?.title };
};
