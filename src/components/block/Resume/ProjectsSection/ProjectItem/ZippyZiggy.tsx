import ProjectItem, {
  ProjectResult,
} from '@/components/block/Resume/ProjectsSection/ProjectItem/index';
import { links } from '@/constants/links';

const zippyLinks: Array<ProjectResult> = [
  { href: links.zippy.website, title: links.zippy.website, type: 'link' },
  {
    href: links.zippy.chromeWebStore,
    title: '크롬 웹스토어',
    type: 'link',
  },
  { href: links.zippy.projectGit, title: 'zippyziggy-v2 (깃허브)', type: 'github' },
];

const zippyTechStacks = [
  'TypeScript',
  'React',
  'Axios',
  'React-Query',
  'SCSS',
  'ContextAPI',
  'Vite',
];

const zippyFunctions = [
  '- 웹(NextJS) 개발 환경 구성',
  '- 확장프로그램 개발 환경 구성, 디자인, 개발 전담',
  '- React Portal Mutation Observer 를 이용해 확장프로그램 UI를 ChatGPT 사이트에 삽입',
  '- ZippyZiggy, 확장프로그램, ChatGPT 간의 데이터 흐름 설계',
  '- Axios의 인터셉터, 인스턴스를 활용하여 네트워크 요청 모듈화',
  '- React Query의 useClient를 이용해 좋아요와 북마크에낙관적 업데이트 적용',
  '- chrome.i18n으로 다국어 지원',
  '- 빌드 후 zip 파일 자동 생성 로직 구현(확장 프로그램 배포 간편화)',
];

export default function ZippyZiggy() {
  return (
    <ProjectItem
      imageProps={{ type: 'img', src: '/assets/images/zippy.png', alt: '지피지기 프로젝트' }}
      title={'지피지기'}
      projectLink={links.zippy.projectNotion}
      members={'6명 (프론트3 / 백3)'}
      position={'프론트엔드'}
      period={'2023.04.10 ~ 2023.05.19 (총 6주)'}
      techStacks={zippyTechStacks}
      description={
        <p>
          ZippyZiggy는 <b>ChatGPT 프롬프트</b>를 쉽고 빠르게 사용할 수 있게 도와주는 서비스입니다.
          다양한 플랫폼(웹, 앱, 브라우저 확장프로그램)에서 사용할 수 있습니다.
        </p>
      }
      projectResults={zippyLinks}
      implementations={zippyFunctions}
    />
  );
}
