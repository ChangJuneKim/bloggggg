import { Box, Spacer } from '@/components/base';
import Alert from '@/components/mdx/Alert';
import Contacts from '@/components/mdx/Contacts';
import headings from '@/components/mdx/Headings';

const Heading = headings.h1;
export default function IntroSection() {
  return (
    <Box as={'section'}>
      <Heading id={'intro'}>
        <Box as={'span'} fontWeight={'normal'}>
          안녕하세요
        </Box>
        <br />
        <Box as={'span'} fontWeight={'normal'}>
          저는 <b>김창준</b>입니다.
        </Box>
      </Heading>
      <Alert>
        <p>
          <b>안녕하세요.</b> 웹을 통해 사용자와 직접 소통하며 사용자 경험을 최우선으로 생각하는
          프론트엔드 개발자, <b>김창준</b>입니다.
        </p>
        <p>
          삼성 청년 소프트웨어 아카데미(SSAFY 8기)에서 기획부터 디자인, 프론트엔드, 백엔드까지 전
          과정을 직접 경험하면서 사용자의 눈에 직접 보이는 인터페이스를 구현하고, 단순히 시각적인
          부분을 넘어, 백엔드 시스템과 기획 의도를 사용자에게 효과적으로 전달하는 역할인 프론트엔드
          개발의 매력에 빠지게 되었습니다.
        </p>
        <p>
          새로운 프로젝트를 시작할 때마다, 저는 최소 한 가지 새로운 기술을 적용해보려고 합니다. 이
          블로그를 구현할 때 Next.js와 Vanilla-Extract를 사용해 개발했습니다. 이 과정에서, 정적
          사이트 생성(SSG)을 활용해 사이트의 로딩 속도를 빠르게 하고 SEO를 최적화하는 방법을
          배웠습니다. Vanilla-Extract를 사용해 보며, CSS 타입 안정성을 확보하고 성능을 개선했습니다.
          기술 트렌드에 대해 지속해서 정보를 수집하기 위해, 프론트엔드 개발자 오픈채팅방에
          참여하거나, 관련 뉴스레터를 구독하는 등의 방법을 활용하고 있습니다.
        </p>
        <span
          style={{
            position: 'absolute',
            top: '0.425rem',
            right: '0.875rem',
            fontSize: '0.6rem',
          }}
        >
          2023-10-16 작성
        </span>
      </Alert>
      <br />
      <Contacts />
      <Spacer
        size={'20'}
        axis={'horizontal'}
        background={'wordHighlight'}
        height={'1'}
        marginTop={'0'}
        marginBottom={'0'}
        marginLeft={'auto'}
        marginRight={'auto'}
      />
    </Box>
  );
}
