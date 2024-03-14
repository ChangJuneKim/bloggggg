import { SkipNavContent } from '@/components/a11y';
import Contacts from '@/components/mdx/Contacts';
import Hero from '@/components/block/Hero';
import { Introduce } from '@/components/block';
import LatestPosts from '@/components/block/LatestPosts';
import Divider from '@/components/extended/Divider';

export default function Home() {
  return (
    <>
      <Hero
        title={'👨🏼‍💻 김창준의 블로그'}
        desc={[
          '저의 블로그에 오신 것을 환영합니다! 🎉',
          '학습하는 개발자, 함께 성장하는 공간입니다.',
        ]}
        image={{ alt: '홈 배경', filename: 'home.png' }}
      />
      <SkipNavContent variant={'hero'}>
        <Introduce />
        <Contacts />
        <Divider />
        <LatestPosts />
        <Divider />
      </SkipNavContent>
    </>
  );
}
