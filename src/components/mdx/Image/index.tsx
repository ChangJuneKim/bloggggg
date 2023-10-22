import NextImage from 'next/image';
import { Box } from '@/components/base';
import { imageStyle } from '@/components/mdx/Image/index.css';

interface ImageProps {
  src: string;
  alt: string;
  height: number;
  width: number;
  layout: 'responsive';
}

export default function Image({ src, alt }: ImageProps) {
  const imageProps = {
    src,
    alt,
  };
  return (
    <Box
      as="figure"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      borderRadius={'md'}
    >
      <NextImage
        src={src}
        alt="Picture of the author"
        className={imageStyle}
        width={1000}
        height={1000}
      />
      <figcaption>{alt}</figcaption>
    </Box>
  );
}
