import Button, { ButtonKind } from '@/components/base/Button';
import { ReactNode } from 'react';
import { arrowAnimationStyle } from '@/components/base/Button/index.css';
import { SVGIcon } from '@/components/base/SVGIcon';

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
