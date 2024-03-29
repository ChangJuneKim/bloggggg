import ProjectItem, {
  ProjectResult,
} from '@/components/pages/Resume/ProjectsSection/ProjectItem/index';
import siteConfig from '@/site.config';

const zippyLinks: Array<ProjectResult> = [
  // { href: siteConfig.links.zippy.website, title: siteConfig.links.zippy.website, type: 'link' },
  // {
  //   href: siteConfig.links.zippy.chromeWebStore,
  //   title: '크롬 웹스토어',
  //   type: 'link',
  // },
  { href: '#지피지기', title: '2023-11-28 서비스 종료', type: 'link' },
  { href: siteConfig.links.zippy.projectGit, title: 'zippyziggy-v2 (깃허브)', type: 'github' },
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
      imageProps={{ type: 'img', src: '/assets/images/resume/zippy.png', alt: '지피지기 프로젝트' }}
      title={'지피지기'}
      projectLink={siteConfig.links.zippy.projectNotion}
      members={'6명 (프론트3 / 백3)'}
      position={'프론트엔드'}
      period={'2023.04.10 ~ 2023.05.19 (총 6주)'}
      techStacks={zippyTechStacks}
      description={
        <>
          <p>
            ZippyZiggy는 <b>ChatGPT 프롬프트</b>를 쉽고 빠르게 사용할 수 있게 도와주는 서비스입니다.
            다양한 플랫폼(웹, 앱, 브라우저 확장프로그램)에서 사용할 수 있습니다.
          </p>
          <p>
            ChatGPT가 출시된 초기 단계에서 사용자 경험을 개선하고자 하는 목표로 기존의 불편한 UI를
            개선하고, 새로운 기능, 번역 기능, 그리고 미리 작성된 프롬프트 적용 기능을 추가하는 데
            초점을 맞췄습니다. 이 서비스는 다양한 플랫폼에서 ChatGPT의 접근성을 높이는 것을 목표로
            삼았습니다.
          </p>
        </>
      }
      projectResults={zippyLinks}
      implementations={zippyFunctions}
    />
  );
}
