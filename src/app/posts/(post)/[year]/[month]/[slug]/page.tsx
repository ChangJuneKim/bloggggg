import { useMDXComponent } from 'next-contentlayer/hooks';
import { allPosts, Post } from '@/contentlayer/generated';
import { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import { components } from '@/components/mdx';
import { SkipNavContent } from '@/components/a11y';
import { Box, SVGIcon, Tag } from '@/components/base';
import { space } from '@/styles/tokens/space';
import Category, { CategoryType } from '@/components/block/PostCard/Category';
import { postTitle } from '@/app/posts/(post)/[year]/[month]/[slug]/index.css';
import { readingTimeStyle } from '@/components/block/PostCard/index.css';
import IconSpan from '@/components/extended/IconSpan';
import { format } from 'date-fns';
import { prevNextFlex } from '@/components/block/PrevNextPost/index.css';
import { PrevNextPost, ScrollIndicator, Toc } from '@/components/block';
import { mdxSection, tagsAside, tagsAsideSticky } from '@/app/posts/(posts)/layout.css';
import { descAllPosts, getTagsOfPost } from '@/utils/posts';
import Giscus from '@/components/block/Giscus';
import { Metadata, ResolvingMetadata } from 'next';
import { ImageResponse } from 'next/server';
import OpenGraph from '@/components/OpenGraph';
import { size } from '@/app/opengraph-image';

export const dynamic = 'error';

interface PostPageProps {
  params: {
    year: string;
    month: string;
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

const PostPage = ({ params }: PostPageProps) => {
  const post = allPosts.find(
    (post) => post._raw.flattenedPath === `${params.year}/${params.month}/${params.slug}`
  );
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
  const currentIndex = sortedPosts.findIndex(
    (post) => post._raw.flattenedPath === `${params.year}/${params.month}/${params.slug}`
  );
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

export const generateStaticParams = async () => {
  return allPosts.map((post) => {
    const date = new Date(post.createdAt);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return {
      year: year.toString(),
      month: month.toString(),
      slug: post._raw.sourceFileName.replace('.mdx', ''),
    };
  });
};

export const generateMetadata = async (
  { params }: PostPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const post = allPosts.find(
    (post) => post._raw.flattenedPath === `${params.year}/${params.month}/${params.slug}`
  );

  const previousImages = (await parent).openGraph?.images || [];

  const test = new ImageResponse(
    (
      <OpenGraph
        title="테스트"
        tags={['개발', '삽질']}
        url="https://www.changjune.com/"
        thumbnailSrc="https://changjune.com/assets/images/thumbnails/fire.png"
      />
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  );

  return {
    title: post?.title,
    description: post?.description,
    openGraph: {
      images: [test, ...previousImages],
    },
  };
};
