import { format } from 'date-fns';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { allPosts, Post } from '@/contentlayer/generated';
import { Box, MyLink } from '@/components/base';
import { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import { components } from '@/components/mdx';
import { SkipNavContent } from '@/components/a11y';
import { mdxSection } from '@/app/posts/layout.css';
import Toc from '@/components/block/Toc';
import { space } from '@/styles/tokens/space';
import IconSpan from '@/components/extended/IconSpan';
import { readingTimeStyle } from '@/components/block/PostCard/index.css';
import { postTitle } from '@/app/posts/[slug]/index.css';
import Category from '@/components/block/PostCard/Category';
import { PaginationProps } from '@/components/block/Pagination';

interface Props {
  params: {
    slug: string;
  };
}
const mdxComponents: MDXComponents = {
  ...components,
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
};

const Mdx = ({ post }: { post?: Post }) => {
  const Content = useMDXComponent(post?.body.code || '');

  return <Content components={mdxComponents} />;
};

const PostPage = ({ params }: Props) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) {
    return (
      <SkipNavContent>
        <Box as={'section'} className={mdxSection}>
          <Box
            as={'article'}
            __minHeight={`calc(100vh - ${space.navigationHeight})`}
            __display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            글을 찾을 수 없습니다.
          </Box>
        </Box>
      </SkipNavContent>
    );
  }
  // 현재 글의 인덱스
  const currentIndex = allPosts.findIndex((post) => post._raw.flattenedPath === params.slug);
  // 이전 글과 다음 글의 인덱스
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <SkipNavContent variant={'fullBleed'}>
      <Box as={'section'} className={mdxSection}>
        <Box as={'article'} __minHeight={`calc(100vh - ${space.navigationHeight})`}>
          <Category category={post.category as PaginationProps['selectedCategory']} />
          <Box __marginTop={0} __marginBottom={0} as={'h1'} className={postTitle}>
            {post?.title}
          </Box>
          <Box
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            __marginBottom={'4rem'}
          >
            <Box as={'time'} color={'textMuted'} className={readingTimeStyle}>
              {format(new Date(post.createdAt), 'yyyy년 MM월 dd일')} 발행
            </Box>
            <IconSpan iconId={'clock'} className={readingTimeStyle}>
              {post?.readingTime._readingTime}
            </IconSpan>
          </Box>
          <Mdx post={post!} />
        </Box>
        <Toc headings={post?.headings} />
      </Box>
      <div>
        {prevPost && <MyLink href={prevPost.url}>← {prevPost.title}</MyLink>}
        {nextPost && <MyLink href={nextPost.url}>{nextPost.title} →</MyLink>}
      </div>
    </SkipNavContent>
  );
};

export default PostPage;

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: Props) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return { title: post?.title };
};
