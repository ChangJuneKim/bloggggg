import NextImage from 'next/image';
import { Box } from '@/components/base';
import { figcaptionItalic, imageStyle } from '@/components/mdx/Image/index.css';
import { ReactNode } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  height: number;
  width: number;
  layout: 'responsive';
  children: ReactNode;
}

export default function Image({ src, alt, children }: ImageProps) {
  return (
    <Box
      as="figure"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      borderRadius={'md'}
    >
      <Box
        as="a"
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        display="flex"
        className={imageStyle}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <NextImage src={src} alt={alt} width={1000} height={1000} />
      </Box>
      {children ? (
        <figcaption className={figcaptionItalic}>{children}</figcaption>
      ) : (
        <figcaption className={figcaptionItalic}>{alt}</figcaption>
      )}
    </Box>
  );
}
