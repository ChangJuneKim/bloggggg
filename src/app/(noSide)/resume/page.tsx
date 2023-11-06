import { Box } from '@/components/base';
import Divider from '@/components/extended/Divider';
import { resumeStyle } from '@/app/(noSide)/resume/index.css';
import { Metadata } from 'next';
import {
  AwardsSection,
  EducationSection,
  IntroSection,
  ProjectsSection,
  TechStackSection,
} from '@/components/pages';

export const metadata: Metadata = {
  title: `Resume`,
  description: '저에 대해 간략한 소개 글을 작성했습니다.',
};

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
