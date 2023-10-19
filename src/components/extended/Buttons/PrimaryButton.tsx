import { ReactNode } from 'react';
import { arrowAnimationStyle } from '@/components/base/Button/index.css';
import { Button, SVGIcon } from '@/components/base';
import { ButtonKind } from '@/components/base/Button';

export interface PrimaryButtonProps {
  to: string;
  buttonType?: ButtonKind;
  children: ReactNode;
}

export default function PrimaryButton({
  to,
  buttonType = 'internal',
  children,
  ...rest
}: PrimaryButtonProps) {
  return (
    <Button
      buttonType={buttonType}
      to={to}
      variant="primary"
      rightIcon={<SVGIcon id="arrow-right" />}
      className={arrowAnimationStyle}
      {...rest}
    >
      {children}
    </Button>
  );
}
