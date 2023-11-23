// Route segment config
import { ImageResponse } from 'next/server';
import OpenGraph, { OpenGraphImageSize } from '@/components/OpenGraph';
import siteConfig from '@/site.config';

export const runtime = 'edge';

// Image metadata
export const alt = siteConfig.title;
export const size = OpenGraphImageSize;

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <OpenGraph
        title="김창준의 블로그입니다."
        tags={['개발', '일상', '삽질']}
        url="https://www.changjune.com/"
      />
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
