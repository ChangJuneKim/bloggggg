import { useMDXComponent } from 'next-contentlayer/hooks';
import { allPosts, Post } from '@/contentlayer/generated';
import { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import { components } from '@/components/mdx';
import { SkipNavContent } from '@/components/a11y';
import { Box, SVGIcon, Tag } from '@/components/base';
import { space } from '@/styles/tokens/space';
import Category, { CategoryType } from '@/components/block/PostCard/Category';
import { postTitle } from '@/app/posts/(post)/[...slug]/index.css';
import { readingTimeStyle } from '@/components/block/PostCard/index.css';
import IconSpan from '@/components/extended/IconSpan';
import { format } from 'date-fns';
import { prevNextFlex } from '@/components/block/PrevNextPost/index.css';
import { PrevNextPost, ScrollIndicator, Toc } from '@/components/block';
import { mdxSection, tagsAside, tagsAsideSticky } from '@/app/posts/(posts)/layout.css';
import { descAllPosts, getTagsOfPost } from '@/utils/posts';
import Giscus from '@/components/block/Giscus';
import { Metadata } from 'next';

export const dynamic = 'error';

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps['params']) {
  const slug = params?.slug?.join('/');
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    return null;
  }

  return post;
}

export const generateStaticParams = async () => {
  return allPosts.map((post) => {
    return {
      slug: post.slugAsParams.split('/'),
    };
  });
};

export const generateMetadata = async ({ params }: PostPageProps): Promise<Metadata> => {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post?.title,
    description: post?.description,
  };
};

const mdxComponents: MDXComponents = {
  ...components,
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
};

const Mdx = ({ post }: { post?: Post }) => {
  const Content = useMDXComponent(post?.body.code || '');

  return <Content components={mdxComponents} />;
};

const PostPage = async ({ params }: PostPageProps) => {
  const post = await getPostFromParams(params);
  const sortedPosts = descAllPosts();

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

  const uniqueTags = getTagsOfPost(post);
  // 현재 글의 인덱스
  const currentIndex = sortedPosts.findIndex((post) => post.slugAsParams === params.slug.join('/'));
  // 이전 글과 다음 글의 인덱스
  const prevPost = currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;

  return (
    <SkipNavContent variant={'fullBleed'}>
      <ScrollIndicator />
      <Box as={'section'} className={mdxSection}>
        <Box as={'aside'} className={tagsAside}>
          <Box className={tagsAsideSticky}>
            <Box as={'p'} fontSize={'lg'} fontWeight={'semibold'} marginBottom={'2'}>
              TAGS.
            </Box>
            <Box marginBottom={'4'}>
              {uniqueTags.length ? (
                uniqueTags.map((tag, index) => (
                  // TODO 태그 필터링 하기
                  <Tag key={index} type={'link'} href={`#`} label={tag || ''} />
                ))
              ) : (
                <p>태그가 없습니다.</p>
              )}
            </Box>
            <Box textAlign={'right'} marginRight={'4'}>
              <Link href={'/posts/categories/all/pages/1'}>
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
          <Category category={post.category as CategoryType} />
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
      <Giscus />
    </SkipNavContent>
  );
};

export default PostPage;
