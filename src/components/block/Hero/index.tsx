import { Box } from '@/components/base';
import {
  backdrop,
  heroSection,
  imageContainer,
  imageStyle,
  welcome,
} from '@/components/block/Hero/index.css';
import Image from 'next/image';
import hero from '../../../../public/assets/images/hero.webp';

export default function Hero() {
  return (
    <Box as={'section'} className={heroSection}>
      <Box className={imageContainer}>
        <Image src={hero} alt={'hero'} className={imageStyle} />
      </Box>
      <Box className={backdrop}></Box>
      <Box className={welcome}>
        <h1>👨🏼‍💻 김창준의 블로그</h1>
        <p>저의 블로그에 오신 것을 환영합니다! 🎉</p>
        <p>학습하는 개발자, 함께 성장하는 공간입니다.</p>
      </Box>
    </Box>
  );
}
