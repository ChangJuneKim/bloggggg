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
import profile from '../../../../public/assets/images/profile.jpg';

export default function Introduce() {
  return (
    <Box as={'section'} className={introduceSection}>
      <Box className={profileContainer}>
        <Box className={profileImage}>
          <Image
            src={profile}
            alt={'프로필 사진'}
            width={100}
            height={100}
            priority
            style={{
              aspectRatio: '1 / 1',
            }}
          />
        </Box>
      </Box>
      <Box className={introduce}>
        <h2 className={myName}>김창준</h2>
        <p className={oneLiner}>
          <>
            <b>안녕하세요.</b> 웹을 통해 사용자와 직접 소통하며 사용자 경험을 최우선으로 생각하는
            프론트엔드 개발자 <b>김창준</b>입니다.
          </>
        </p>
        <p className={oneLiner}>
          이 블로그의 주된 목적은 제가 공부하며 겪는 다양한 경험과 정보를 공유하는 것 입니다. 특히
          새로운 기술을 배우거나 문제를
          <br />
          해결하는 과정에서 &quot;아!&quot; 하는 순간이나 다른 사람에게도 설명하고 싶을 때, 그
          주제에 대해 정리해서 기록합니다.
        </p>
      </Box>
    </Box>
  );
}
