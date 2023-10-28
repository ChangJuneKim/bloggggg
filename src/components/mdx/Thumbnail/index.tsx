import { Box } from '@/components/base';
import Image from 'next/image';
import { ThumbnailStyle } from '@/components/mdx/Thumbnail/index.css';
import { CSSProperties } from 'react';

interface ThumbnailProps {
  background?: CSSProperties['backgroundColor'];
  alt: string;
  filename: string;
}
export default function Thumbnail({ filename, background = 'transparent', alt }: ThumbnailProps) {
  let backg;

  switch (filename.split('.')[0]) {
    case 'js':
      backg = '#F7E018';
    case 'tip':
      backg = '#C8EAEF';
    case 'fire':
      backg = '#FAFBE4';
    default:
      backg = null;
  }

  return (
    <Box className={ThumbnailStyle}>
      <Image
        src={`/assets/images/thumbnails/${filename}`}
        style={{
          width: '100%',
          height: '45vh',
          objectFit: 'contain',
          aspectRatio: '1 / 1',
          background: backg ?? background,
        }}
        width={1000}
        height={1000}
        alt={`${alt} 글의 썸네일"`}
        priority
      />
    </Box>
  );
}
