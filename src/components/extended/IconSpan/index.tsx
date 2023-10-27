import { Box, SVGIcon } from '@/components/base';
import { ReactNode } from 'react';
import { SVGIconNames } from '@/components/base/SVGIcon';

interface IconSpanProps {
  className?: string;
  children: ReactNode;
  iconId: SVGIconNames;
}
export default function IconSpan({ children, className = undefined, iconId }: IconSpanProps) {
  return (
    <Box
      as={'span'}
      display={'flex'}
      alignItems={'center'}
      color={'textMuted'}
      className={className}
    >
      <Box as={'span'} width={'4'} height={'4'} marginRight={'1'}>
        <SVGIcon id={iconId} width={'100%'} height={'100%'} />
      </Box>
      {children}
    </Box>
  );
}
