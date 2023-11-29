import { Box } from '@/components/base';
import Image from 'next/image';
import { ThumbnailStyle } from '@/components/mdx/Thumbnail/index.css';
import { CSSProperties } from 'react';

interface ThumbnailProps {
  background?: CSSProperties['backgroundColor'];
  alt: string;
  path: string;
  filename: string;
}
export default function Thumbnail({
  path = 'thumbnails',
  filename,
  background = 'transparent',
  alt,
}: ThumbnailProps) {
  let backg;

  switch (filename.split('.')[0]) {
    case 'js':
      backg = '#F7E018';
      break;
    case 'tip':
      backg = '#C8EAEF';
      break;
    case 'fire':
      backg = '#FAFBE4';
      break;
    default:
      backg = null;
  }

  return (
    <Box className={ThumbnailStyle}>
      <Image
        src={`/assets/images/${path}/${filename}`}
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
