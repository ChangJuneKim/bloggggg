import { Box } from '@/components/base';
import { SVGIconNames } from '@/components/base/SVGIcon';
import ResumeSectionTitle from '@/components/pages/Resume/ResumeSectionTitle';
import IconTextItem from '@/components/pages/Resume/TechStackSection/IconTextItem';

type TechStack = {
  id: SVGIconNames;
  description: Array<string>;
};

const techStacks: Array<TechStack> = [
  {
    id: 'javascript',
    description: [
      'ES6+를 이해하고, 이를 활용하여 중소규모 프로젝트를 진행할 수 있음',
      'JavaScript 기반 프레임워크와 라이브러리를 활용할 수 있음',
      '최신 ECMAScript 표준에 대한 지속적인 학습과 적용',
    ],
  },
  {
    id: 'typescript',
    description: ['TypeScript 문법을 이해하고, 타입 시스템을 활용하여 프로젝트를 개발 가능'],
  },
  {
    id: 'react',
    description: [
      'Life Cycle을 이해하고, 기초적인 컴포넌트 구조를 설계하고 구현할 수 있음',
      'Hooks와 React Context 등을 이용하여 상태 관리와 데이터 흐름을 구현할 수 있음',
      '커스텀 훅을 이용하여 공통 로직을 분리하거나, 컴포넌트와 로직을 분리할 수 있음',
    ],
  },
  {
    id: 'nextjs',
    description: [
      'Next.js와 Contentlayer를 사용하여 정적 블로그를 개발, 파일 기반 라우팅',
      'SSR과 SSG의 기본 원리를 이해하고 있음',
      '다양한 API 경로를 활용하여 필요에 따라 데이터를 처리하고 표시하는 데 익숙함',
    ],
  },
];

const etc = [
  'vue.js(2)',
  'vanilla-extract',
  'Storybook',
  'Spring-Boot',
  'node.js',
  'express',
  'mongoDB',
  'MySQL',
];

export default function TechStackSection() {
  return (
    <Box as={'section'} marginTop={'16'}>
      <ResumeSectionTitle title={'🛠 Tech'} desc={'기술 스택'} />
      <ul>
        {techStacks.map((tech) => (
          <IconTextItem key={tech.id} imageProps={{ type: 'svg', src: tech.id }}>
            {tech.description.map((desc, index) => (
              <li key={index}>
                <p>{desc}</p>
              </li>
            ))}
          </IconTextItem>
        ))}
      </ul>
      <Box my={'4'}>
        <ResumeSectionTitle title={'Etc'} desc={'경험이 있음'} />
        {etc.map((techStack) => (
          <Box
            as={'span'}
            display={'inline-block'}
            marginBottom={'1'}
            px={'2'}
            py={'1'}
            marginRight={'2'}
            borderRadius={'md'}
            background={'mutedAsBg'}
            color={'primary'}
            key={`${techStack}`}
          >
            {techStack}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
