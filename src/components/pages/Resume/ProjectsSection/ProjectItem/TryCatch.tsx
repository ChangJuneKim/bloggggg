import ProjectItem, {
  ProjectResult,
} from '@/components/pages/Resume/ProjectsSection/ProjectItem/index';
import siteConfig from '@/site.config';

const tryCatchTechStacks = [
  'TypeScript',
  'React',
  'Recoil',
  'React-Query',
  'Styled-Components',
  'Axios',
  'Vite',
];

const zippyLinks: Array<ProjectResult> = [
  { href: siteConfig.links.tryCatch.projectGit, title: 'tryCatch (깃허브)', type: 'github' },
];

const zippyFunctions = [
  '- 프론트엔드 개발 환경 구성',
  '- 랜딩페이지, Q&A 페이지',
  '- ContextAPI 와 Recoil를 활용한 유저, 모달, 데이터 상태 관리',
  '- Axios 의 인터셉터, 인스턴스를 활용하여 네트워크 요청 모듈화',
  '- SSE를 이용한 실시간 알림 기능 구현',
  '- Private Router 구현',
  '- React Query의 useInfiniteQuery로 무한 스크롤 구현',
  '- Cheerio, Axios, Puppeteer 를 활용해서 기술 블로그 게시글을 크롤링',
];

export default function TryCatch() {
  return (
    <ProjectItem
      imageProps={{ type: 'svg', src: 'tryCatch' }}
      title={'트라이캐치'}
      projectLink={siteConfig.links.tryCatch.projectNotion}
      members={'6명 (프론트3 / 백3)'}
      position={'프론트엔드 리더'}
      period={'2023.01.03 ~ 2023.02.17 (총 7주)'}
      techStacks={tryCatchTechStacks}
      description={
        <p>
          트라이캐치는 깃허브 정보를 바탕으로 기술 블로그 글을 추천해주고, 소통할 수 있는 공간이
          있는 개발자 커뮤니티 서비스 입니다.
        </p>
      }
      projectResults={zippyLinks}
      implementations={zippyFunctions}
    />
  );
}
