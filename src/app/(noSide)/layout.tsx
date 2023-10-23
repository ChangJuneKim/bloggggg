import { SkipNavContent } from '@/components/a11y';
import { ReactNode } from 'react';

export default function NoSideLayout({ children }: { children: ReactNode }) {
  return <SkipNavContent variant={'hero'}>{children}</SkipNavContent>;
}
