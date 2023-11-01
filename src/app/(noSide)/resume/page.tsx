import { Box } from '@/components/base';
import {
  AwardsSection,
  EducationSection,
  IntroSection,
  ProjectsSection,
  TechStackSection,
} from '@/components/block';
import Divider from '@/components/extended/Divider';
import { resumeStyle } from '@/app/(noSide)/resume/index.css';

export default function ResumePage() {
  return (
    <Box my={['8', '8']} className={resumeStyle}>
      <IntroSection />
      <TechStackSection />
      <Divider />
      <ProjectsSection />
      <Divider />
      <AwardsSection />
      <Divider />
      <EducationSection />
    </Box>
  );
}

export async function generateMetadata() {
  return {
    title: `김창준 | Resume`,
  };
}
