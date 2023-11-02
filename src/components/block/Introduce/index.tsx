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
          <Image src={'/assets/images/profile.jpg'} alt={'프로필 사진'} width={100} height={100} />
        </Box>
      </Box>
      <Box className={introduce}>
        <h2 className={myName}>김창준</h2>
        <p className={oneLiner}>
          안녕하세요 웹 기술에 열정을 가진 프론트엔드 개발자입니다.
          <br />
          지속적인 배움을 통해 더 나은 개발자가 되고자 합니다.
        </p>
      </Box>
    </Box>
  );
}
