// Route segment config
import { ImageResponse } from 'next/server';
import OpenGraph, { OpenGraphImageSize } from '@/components/OpenGraph';
import siteConfig from '@/site.config';
import { allPosts } from '@/contentlayer/generated';

export const runtime = 'edge';

// Image metadata
export const alt = siteConfig.title;
export const size = OpenGraphImageSize;

export const contentType = 'image/png';

export default async function OpengraphImage({
  params: { year, month, slug },
}: {
  params: { year?: string; month?: string; slug?: string };
}) {
  const post = allPosts.find((post) => post._raw.flattenedPath === `${year}/${month}/${slug}`);

  const tags = post?.tags?.map((tag) => tag.title!);

  return new ImageResponse(
    (
      <OpenGraph
        title={post?.title || '김창준의 블로그입니다.'}
        tags={tags || []}
        url={`https://www.changjune.com/${year}/${month}/${slug}`}
        thumbnailSrc={`https://changjune.com${post?.thumbnail}`}
      />
    ),
    {
      ...size,
    }
  );
}
