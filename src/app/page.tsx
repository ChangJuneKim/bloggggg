import PrimaryButton from '@/components/extended/Buttons/PrimaryButton';
import SecondaryButton from '@/components/extended/Buttons/SecondaryButton';
import ShareAnywhereButton from '@/components/extended/Buttons/ShareAnywhereButton';

export default function Home() {
  return (
    <main>
      <PrimaryButton to="https://www.naver.com/" buttonType="external">
        네이버로
      </PrimaryButton>
      <SecondaryButton to="https://www.naver.com/" buttonType="external">
        이건뭐지?
      </SecondaryButton>
      <ShareAnywhereButton link="http://localhost:3000/posts/test1" message="게시글 제목" />
      홈페이지
    </main>
  );
}
