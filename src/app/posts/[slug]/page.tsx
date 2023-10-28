import { useMDXComponent } from 'next-contentlayer/hooks';
import { allPosts, Post } from '@/contentlayer/generated';
import { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import { components } from '@/components/mdx';
import { SkipNavContent } from '@/components/a11y';
import { Box, SVGIcon, Tag } from '@/components/base';
import { mdxSection, tagsAside, tagsAsideSticky } from '@/app/posts/layout.css';
import { space } from '@/styles/tokens/space';
import Category from '@/components/block/PostCard/Category';
import { PaginationProps } from '@/components/block/Pagination';
import { postTitle } from '@/app/posts/[slug]/index.css';
import { readingTimeStyle } from '@/components/block/PostCard/index.css';
import IconSpan from '@/components/extended/IconSpan';
import { format } from 'date-fns';
import Divider from '@/components/extended/Divider';
import { prevNextFlex } from '@/components/block/PrevNextPost/index.css';
import { PrevNextPost, Toc } from '@/components/block';

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

  const uniqueTags = [...new Set(post?.tags?.map((tag) => tag.title))];
  // 현재 글의 인덱스
  const currentIndex = allPosts.findIndex((post) => post._raw.flattenedPath === params.slug);
  // 이전 글과 다음 글의 인덱스
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <SkipNavContent variant={'fullBleed'}>
      <Box as={'section'} className={mdxSection}>
        <Box as={'aside'} className={tagsAside}>
          <Box className={tagsAsideSticky}>
            <Box as={'p'} fontSize={'lg'} fontWeight={'semibold'} marginBottom={'2'}>
              TAGS.
            </Box>
            <Box marginBottom={'4'}>
              {uniqueTags.length ? (
                uniqueTags.map((tag, index) => (
                  <Tag
                    key={index}
                    type={'link'}
                    href={`/posts?category=${tag}`}
                    label={tag || ''}
                  />
                ))
              ) : (
                <p>태그가 없습니다.</p>
              )}
            </Box>
            <Box textAlign={'right'} marginRight={'4'}>
              <Link href={'/posts'}>
                목록으로
                <Box
                  as={'span'}
                  display={'inline-block'}
                  style={{ translate: '0 3px' }}
                  marginRight={'1'}
                >
                  <SVGIcon id={'arrow-left'} width={'1em'} height={'1em'} />
                </Box>
              </Link>
            </Box>
          </Box>
        </Box>
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
      <Box px={'20'} paddingBottom={'8'} display={'flex'} className={prevNextFlex}>
        <PrevNextPost type={'prev'} post={prevPost} key={'prev'} />
        <PrevNextPost type={'next'} post={nextPost} key={'next'} />
      </Box>
      <Divider />
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
