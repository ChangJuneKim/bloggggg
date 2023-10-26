import { Box } from '@/components/base';
import ResumeSectionTitle from '@/components/block/Resume/ResumeSectionTitle';
import MyBlog from '@/components/block/Resume/ProjectsSection/ProjectItem/MyBlog';
import TryCatch from '@/components/block/Resume/ProjectsSection/ProjectItem/TryCatch';
import ZippyZiggy from '@/components/block/Resume/ProjectsSection/ProjectItem/ZippyZiggy';
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
