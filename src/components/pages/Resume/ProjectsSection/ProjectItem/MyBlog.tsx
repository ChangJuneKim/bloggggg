import ProjectItem, {
  ProjectResult,
} from '@/components/pages/Resume/ProjectsSection/ProjectItem/index';
import siteConfig from '@/site.config';

const blogTechStacks = ['TypeScript', 'NextJS(App)', 'ContentLayer', 'Vanilla-Extract'];

const blogLinks: Array<ProjectResult> = [
  { href: siteConfig.links.myBlog.projectGit, title: '개인 블로그 (깃허브)', type: 'github' },
];

const blogFunctions = [
  '- 파일 기반 라우팅을 사용하여 정적 페이지 생성',
  '- ContentLayer를 활용한 마크다운 파일 파싱 및 데이터 추출',
  '- Vanilla-Extract를 사용한 CSS-in-TS 스타일링',
  '- 반응형 디자인 구현',
  '- 다크 모드 구현',
  '- 검색 기능 구현',
  '- 댓글 시스템 통합 (예: Disqus, Utterances)',
  '- SEO 최적화',
  // '- 성능 최적화 (이미지 최적화, 코드 스플리팅 등)',
];

export default function MyBlog() {
  return (
    <ProjectItem
      imageProps={{
        type: 'img',
        src: '/assets/images/resume/logo.png',
        alt: '김창준의 블로그 프로젝트',
      }}
      title={'개인 블로그'}
      projectLink={siteConfig.links.myBlog.projectNotion}
      members={'개인'}
      position={''}
      period={'2023.10.09 ~'}
      techStacks={blogTechStacks}
      description={
        <>
          <p>
            NextJS와 ContentLayer를 활용해서 개발한 블로그 입니다. 개발하며 학습한 내용을 기반으로
            블로그를 운영하고 있습니다.
          </p>
        </>
      }
      projectResults={blogLinks}
      implementations={blogFunctions}
    />
  );
}
