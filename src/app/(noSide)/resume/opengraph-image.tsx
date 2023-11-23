// Route segment config
import { ImageResponse } from 'next/server';
import OpenGraph, { OpenGraphImageSize } from '@/components/OpenGraph';
import siteConfig from '@/site.config';
import { allPosts } from '@/contentlayer/generated';

export const runtime = 'edge';

// Image metadata
export const alt = `${siteConfig.title} | Resume`;
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
        title={'Resume | 저를 소개합니다.'}
        tags={tags || ['이력', '프로젝트']}
        url={`https://www.changjune.com/resume`}
        thumbnailSrc={`https://changjune.com/assets/images/profile.jpg`}
      />
    ),
    {
      ...size,
    }
  );
}
