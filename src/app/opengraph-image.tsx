// Route segment config
import { ImageResponse } from 'next/server';
import OpenGraph from '@/components/OpenGraph';

export const runtime = 'edge';

// Image metadata
export const alt = '테스트';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function OpengraphImage() {
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
