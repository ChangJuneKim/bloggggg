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
          안녕하세요. 웹을 통해 사용자와 직접 소통하는데 열정을 가진 프론트엔드 개발자,
          김창준입니다.
        </p>
        <p>
          삼성 청년 소프트웨어 아카데미(SSAFY)에서 웹 서비스 개발 전 과정을 체험하며, 사용자 경험을
          직접 디자인하는 프론트엔드 분야에 큰 매력을 느꼈습니다.
        </p>
        <p>
          다양한 프로젝트를 통해 협업과 소통의 중요성을 깊이 깨닫고, 이를 통해 팀 전체가 성장하는
          것을 최우선 가치로 두고 있습니다. 또한, 저는 최신 기술 트렌드를 빠르게 습득하고 이를
          프로젝트에 효과적으로 적용하는 것을 즐기며, 이를 통해 지속적인 성장을 추구합니다.
        </p>
      </Alert>
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
