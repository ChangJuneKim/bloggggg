import { format, parseISO } from 'date-fns';
import { getMDXComponent } from 'next-contentlayer/hooks';
import { allPosts } from '@/contentlayer/generated';

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: any) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return { title: post?.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  const Content = getMDXComponent(post?.body.code as string);

  return (
    <article className="py-8 mx-auto max-w-xl">
      <div className="mb-8 text-center">
        <time dateTime={post?.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post?.date as string), 'LLLL d, yyyy')}
        </time>
        <h1>{post?.title}</h1>
      </div>
      <Content />
    </article>
  );
};

export default PostLayout;
