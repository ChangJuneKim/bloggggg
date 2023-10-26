import { Box } from '@/components/base';
import { SVGIconNames } from '@/components/base/SVGIcon';
import ResumeSectionTitle from '@/components/block/Resume/ResumeSectionTitle';
import IconTextItem from '@/components/block/Resume/TechStackSection/IconTextItem';

type TechStack = {
  id: SVGIconNames;
  description: Array<string>;
};

const techStacks: Array<TechStack> = [
  {
    id: 'javascript',
    description: [
      '- ES6+를 이해하고, 이를 활용하여 중소규모 프로젝트를 진행할 수 있음',
      '- JavaScript 기반 프레임워크와 라이브러리를 활용할 수 있음',
    ],
  },
  {
    id: 'typescript',
    description: ['- TypeScript 문법을 이해하고, 타입 시스템을 활용하여 프로젝트를 개발 가능'],
  },
  {
    id: 'react',
    description: [
      '- Life Cycle을 이해하고, 기초적인 컴포넌트 구조를 설계하고 구현할 수 있음',
      '- Hooks와 React Context 등을 이용하여 상태 관리와 데이터 흐름을 구현할 수 있음',
      '- 커스텀 훅을 이용하여 공통 로직을 분리하거나, 컴포넌트와 로직을 분리할 수 있음',
    ],
  },
  {
    id: 'nextjs',
    description: [
      '- Next.js를 사용하여 SSR, SSG, API 경로 등의 주요 기능을 활용한 웹 개발 경험',
      '- 파일 기반의 라우팅 시스템과 데이터 가져오기 메서드에 익숙함',
    ],
  },
  // 추가적인 기술 스택 객체들
];

export default function TechStackSection() {
  return (
    <Box as={'section'} marginTop={'16'}>
      <ResumeSectionTitle title={'🛠 Tech'} desc={'기술 스택'} />
      {techStacks.map((tech) => (
        <IconTextItem key={tech.id} imageProps={{ type: 'svg', src: tech.id }}>
          {tech.description.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </IconTextItem>
      ))}
    </Box>
  );
}
