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
          src={`/assets/images/${image.filename}`}
          alt={image.alt}
          className={imageStyle}
          priority={true}
          fill
        />
      </Box>
      <Box className={backdrop}></Box>
      <Box className={welcome}>
        {/*<h1>👨🏼‍💻 김창준의 블로그</h1>*/}
        <h1>{title}</h1>
        {desc.map((d, index) => (
          <p key={index}>{d}</p>
        ))}
        {/*<p>저의 블로그에 오신 것을 환영합니다! 🎉</p>*/}
        {/*<p>학습하는 개발자, 함께 성장하는 공간입니다.</p>*/}
      </Box>
    </Box>
  );
}
