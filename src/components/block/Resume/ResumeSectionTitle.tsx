import { Box } from '@/components/base';
import headings from '@/components/mdx/Headings';

interface ResumeSectionTitleProps {
  title: string;
  desc: string;
}

const Heading = headings.h3;

export default function ResumeSectionTitle({ title, desc }: ResumeSectionTitleProps) {
  return (
    <Box marginBottom={'8'}>
      <Heading id={title}>{title}.</Heading>
      <Box as={'p'} color={'textMuted'} fontWeight={'semibold'} opacity={0.8}>
        {desc}
      </Box>
    </Box>
  );
}
