import { screenOnlyStyle } from '@/components/a11y/ScreenOnly/index.css';
import { ReactNode } from 'react';

interface ScreenOnlyProps {
  children: ReactNode;
}
export default function ScreenOnly({ children, ...rest }: ScreenOnlyProps) {
  return (
    <span className={screenOnlyStyle} {...rest}>
      {children}
    </span>
  );
}
