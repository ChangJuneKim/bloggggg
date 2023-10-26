import headings from '@/components/mdx/Headings';
import { Box } from '@/components/base';
import { AwardsSection, EducationSection, ProjectsSection } from '@/components/block';

const Heading = headings.h1;
export default function ResumePage() {
  return (
    <Box my={['8', '8']}>
      {/*<IntroSection />*/}
      {/*<TechStackSection />*/}
      <ProjectsSection />
      <AwardsSection />
      <EducationSection />
    </Box>
  );
}
