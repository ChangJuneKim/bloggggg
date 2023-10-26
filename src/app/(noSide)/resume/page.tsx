import headings from '@/components/mdx/Headings';
import { Box } from '@/components/base';
import { IntroSection } from '@/components/block';
import TechStackSection from '@/components/block/Resume/TechStackSection';

const Heading = headings.h1;
export default function ResumePage() {
  return (
    <Box my={['8', '8']}>
      <IntroSection />
      <TechStackSection />
    </Box>
  );
}
