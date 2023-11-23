export const OpenGraphImageSize = {
  width: 1200,
  height: 630,
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
        src={imageSrc || 'https://changjune.com/assets/images/banner/home.webp'}
        width={OpenGraphImageSize.width}
        height={OpenGraphImageSize.height}
        style={{
          width: `${OpenGraphImageSize.width}px`,
          height: `${OpenGraphImageSize.height}px`,
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
        {title}
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
        {tags.map((tag) => `#${tag}`).join(' ')}
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
        {url}
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
          src={thumbnailSrc || 'https://changjune.com/assets/images/resume/logo.png'}
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
  );
}
