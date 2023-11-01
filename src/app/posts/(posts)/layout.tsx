import Hero from '@/components/block/Hero';
import { SkipNavContent } from '@/components/a11y';

export default function PostsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Hero
        title={'📃 Posts'}
        desc={['개발 글 만이 아닌 다양한 주제의 글이 게시될 예정입니다.', '재밌게 봐주세요.']}
        image={{ alt: '포스트 페이지 배경', filename: 'posts.webp' }}
      />
      <SkipNavContent variant={'hero'}>{children}</SkipNavContent>
    </>
  );
}
