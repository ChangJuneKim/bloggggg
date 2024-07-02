import { Box } from '@/components/base';

import {
  backdrop,
  heroSection,
  imageContainer,
  imageStyle,
  welcome,
} from '@/components/block/Hero/index.css';
import Image from 'next/image';

interface HeroProps {
  title: string;
  desc: Array<string>;
  image: {
    alt: string;
    filename: string;
  };
}
export default function Hero({ title, desc, image }: HeroProps) {
  return (
    <Box as={'section'} className={heroSection}>
      <Box className={imageContainer}>
        <Image
          src={`/assets/images/banner/${image.filename}`}
          alt={image.alt}
          className={imageStyle}
          placeholder={'blur'}
          blurDataURL={`/assets/images/banner/${image.filename}`}
          priority={true}
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            width: '100%',
            height: '100%',
          }}
          width={1792}
          height={200}
        />
      </Box>
      <Box className={backdrop}></Box>
      <Box className={welcome}>
        <h1>{title}</h1>
        {desc.map((d, index) => (
          <p key={index}>{d}</p>
        ))}
      </Box>
    </Box>
  );
}
