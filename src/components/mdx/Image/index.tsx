import NextImage from 'next/image';
import { Box } from '@/components/base';
import { figcaptionItalic, imageStyle } from '@/components/mdx/Image/index.css';
import { ReactNode } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  layout: 'responsive';
  children: ReactNode;
}

export default function Image({ src, alt, children, width, height }: ImageProps) {
  return (
    <Box
      as="figure"
      display="flex"
      flexDirection="column"
      marginTop={'8'}
      __marginBottom={'8'}
      __justifyContent={'space-evenly'}
      alignItems="center"
      // __width={width ? `${width}px` : 'full'}
      mx={'auto'}
      style={{
        maxWidth: width ? `${width}px` : 'full',
      }}
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
