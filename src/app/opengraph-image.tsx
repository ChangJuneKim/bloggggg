// Route segment config
import { ImageResponse } from 'next/server';

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
      <>
        <img
          alt={'ㅁㄴㅇ'}
          src={'https://changjune.com/assets/images/banner/home.webp'}
          width={size.width}
          height={size.height}
          style={{
            width: `${size.width}px`,
            height: `${size.height}px`,
            objectFit: 'cover',
            filter: 'brightness(80%)',
            backgroundColor: 'rgba(0, 0, 255, 0.2)',
          }}
        />
        <span
          style={{
            position: 'absolute',
            top: '25%',
            left: '80px',
            width: `${OpenGraphImageSize.width - 600}px`,
            wordWrap: 'break-word',
            wordBreak: 'break-all',
            color: 'white',
            fontSize: '50px',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          반갑습니다
        </span>
        <span
          style={{
            position: 'absolute',
            top: '65%',
            left: '80px',
            color: 'white',
            fontSize: '40px',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            textAlign: 'center',
          }}
        >
          #tag
        </span>
        <span
          style={{
            position: 'absolute',
            top: '80%',
            left: '80px',
            color: 'white',
            fontSize: '28px',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            textAlign: 'center',
          }}
        >
          테스트 url
        </span>
        <div
          style={{
            position: 'absolute',
            top: '65%',
            right: '5%',
            borderRadius: '8px',
            overflow: 'hidden',
            filter: 'brightness(0.95)',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={'로고'}
            src={'https://changjune.com/assets/images/resume/logo.png'}
            width={1300}
            height={630}
            style={{
              width: `100px`,
              height: `100px`,
              objectFit: 'cover',
            }}
          />
        </div>
      </>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
