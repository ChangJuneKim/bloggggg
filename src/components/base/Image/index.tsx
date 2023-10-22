import NextImage from 'next/image';
import { Box } from '@/components/base';
import { imageStyle } from '@/components/base/Image/index.css';

interface ImageProps {
  src: string;
  alt: string;
  height: number;
  width: number;
  layout: 'responsive';
}

export default function Image({ src, alt, height }: ImageProps) {
  const imageProps = {
    src,
    alt,
  };
  return (
    <Box as="span" display="flex" justifyContent="center">
      <NextImage
        src={src}
        alt="Picture of the author"
        className={imageStyle}
        width={1000}
        height={1000}
      />
    </Box>
  );
}
