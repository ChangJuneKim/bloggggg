import { iconButtonStyle } from '@/components/base/Button/index.css';
import { ReactNode } from 'react';

interface ButtonIconProps {
  children: ReactNode;
}
export default function ButtonIcon(props: ButtonIconProps) {
  const { children, ...rest } = props;

  return (
    <span aria-hidden className={iconButtonStyle} {...rest}>
      {children}
    </span>
  );
}
