import { MyLink } from '@/components/base';
import Image from 'next/image';
import { logoContainer } from '@/components/layout/Header/Logo/index.css';

export default function Logo() {
  return (
    <MyLink
      href="/"
      aria-label="김창준의 블로그 로고,홈 페이지로 이동"
      className={logoContainer}
      minWidth={'6'}
    >
      <Image src="/assets/images/resume/logo.png" width={42} height={42} alt="로고" priority />
    </MyLink>
  );
}
