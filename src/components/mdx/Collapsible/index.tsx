import { Box } from '@/components/base';
import { ReactNode } from 'react';
import { detailsStyle, summaryStyle } from '@/components/mdx/Collapsible/index.css';

interface CollapsibleProps {
  summary: ReactNode;
  children: ReactNode;
}
export default function Collapsible({ summary, children }: CollapsibleProps) {
  return (
    <Box
      as="details"
      px={[`4`, null, `6`]}
      py={[`4`, null, `6`]}
      borderRadius="lg"
      className={detailsStyle}
    >
      <Box as="summary" className={summaryStyle}>
        {summary}
      </Box>
      {children}
    </Box>
  );
}
