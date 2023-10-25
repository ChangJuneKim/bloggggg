import { Box } from '@/components/base';
import {
  introduce,
  introduceSection,
  myName,
  oneLiner,
  profileContainer,
  profileImage,
} from '@/components/block/Introduce/index.css';
import Image from 'next/image';

export default function Introduce() {
  return (
    <Box as={'section'} className={introduceSection}>
      <Box className={profileContainer}>
        <Box className={profileImage}>
          <Image
            src={'/assets/images/77381154.jfif'}
            alt={'프로필 사진'}
            width={100}
            height={100}
          />
        </Box>
      </Box>
      <Box className={introduce}>
        <h3 className={myName}>김창준</h3>
        <p className={oneLiner}>
          안녕하세요 개발자입니다. 아무튼
          <br />
          반갑습니다.반갑습니다.반갑습니다.반갑습니다.반갑습니다.반갑습니다.
        </p>
      </Box>
    </Box>
  );
}
