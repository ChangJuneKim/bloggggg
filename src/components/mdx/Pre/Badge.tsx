import { Box } from '@/components/base';
import { languageDisplayStyle } from '@/components/mdx/Pre/Badge.css';

interface BadgeProps {
  lang: string;
}
export default function Badge({ lang }: BadgeProps) {
  return (
    <Box
      display="inline-flex"
      alignItems="center"
      style={{ textTransform: `uppercase` }}
      className={languageDisplayStyle}
      data-lang={lang}
    >
      {lang}
    </Box>
  );
}
