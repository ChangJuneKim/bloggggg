import { CSSProperties } from 'react';

export const OpenGraphImageSize = {
  width: 1200,
  height: 630,
};

export const OpenGraphBackgroundStyle: CSSProperties = {
  width: `${OpenGraphImageSize.width}px`,
  height: `${OpenGraphImageSize.height}px`,
  objectFit: 'cover',
  filter: 'brightness(80%)',
  backgroundColor: 'rgba(0, 0, 255, 0.2)',
};

export const OpenGraphTitleStyle: CSSProperties = {
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
};

export const OpenGraphTagsStyle: CSSProperties = {
  position: 'absolute',
  top: '65%',
  left: '80px',
  color: 'white',
  fontSize: '40px',
  fontWeight: 'bold',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  textAlign: 'center',
};
export const OpenGraphUrlStyle: CSSProperties = {
  position: 'absolute',
  top: '80%',
  left: '80px',
  color: 'white',
  width: `${OpenGraphImageSize.width - 200}px`,
  fontSize: '28px',
  fontWeight: 'bold',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  wordWrap: 'break-word',
  wordBreak: 'break-all',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
};

export const OpenGraphThumbnailStyle: CSSProperties = {
  position: 'absolute',
  top: '65%',
  right: '5%',
  borderRadius: '8px',
  filter: 'brightness(0.95)',
  width: `100px`,
  height: `100px`,
  objectFit: 'cover',
};

interface OpenGraphProps {
  title: string;
  tags: string[];
  url: string;
  imageSrc?: string;
  thumbnailSrc?: string;
}

export default function OpenGraph({ title, tags, url, imageSrc, thumbnailSrc }: OpenGraphProps) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt={title}
        src={imageSrc || 'https://changjune.com/assets/images/banner/home.png'}
        width={OpenGraphImageSize.width}
        height={OpenGraphImageSize.height}
        style={OpenGraphBackgroundStyle}
      />
      <span style={OpenGraphTitleStyle}>{title}</span>
      <span style={OpenGraphTagsStyle}>{tags.map((tag) => `#${tag}`).join(' ')}</span>
      <span style={OpenGraphUrlStyle}>{url}</span>
      <img
        alt={'로고'}
        src={thumbnailSrc || 'https://changjune.com/assets/images/resume/logo.png'}
        width={1300}
        height={630}
        style={OpenGraphThumbnailStyle}
      />
    </>
  );
}
