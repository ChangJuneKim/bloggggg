import { ReactNode } from 'react';
import CopyButton from '@/components/mdx/Pre/CopyButton';
import { Box } from '@/components/base';
import { codeHeader } from '@/components/mdx/Pre/index.css';
import Badge from '@/components/mdx/Pre/Badge';

interface PreProps {
  children: ReactNode;
  raw: string;
  ['data-language']: string;
  ['data-theme']: string;
}

export default function Pre({ children, raw, ...props }: PreProps) {
  const lang = props['data-language'];
  const theme = props['data-theme'];
  return (
    <>
      <Box className={codeHeader} data-theme={theme}>
        <Badge lang={lang} />
        <CopyButton text={raw} />
      </Box>
      <pre {...props}>{children}</pre>
    </>
  );
}
