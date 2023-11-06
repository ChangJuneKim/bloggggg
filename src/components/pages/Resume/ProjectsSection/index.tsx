import { Box } from '@/components/base';
import ResumeSectionTitle from '@/components/pages/Resume/ResumeSectionTitle';
import MyBlog from '@/components/pages/Resume/ProjectsSection/ProjectItem/MyBlog';
import TryCatch from '@/components/pages/Resume/ProjectsSection/ProjectItem/TryCatch';
import ZippyZiggy from '@/components/pages/Resume/ProjectsSection/ProjectItem/ZippyZiggy';
import Divider from '@/components/extended/Divider';

export default function ProjectsSection() {
  return (
    <Box as={'section'} marginTop={'16'}>
      <ResumeSectionTitle title={'✨ Project'} desc={'프로젝트'} />
      <MyBlog />
      <Divider />
      <ZippyZiggy />
      <Divider />
      <TryCatch />
    </Box>
  );
}
