import { arrowAnimationStyle, subtleButtonStyle } from '@/components/base/Button/index.css';
import { Button, SVGIcon } from '@/components/base';
import { PrimaryButtonProps } from '@/components/extended/Buttons/PrimaryButton';
import { composeClassNames } from '@/components/base/Box/createBox';

interface SecondaryButtonProps extends PrimaryButtonProps {}

export default function SecondaryButton({
  to,
  buttonType = 'internal',
  children,
  ...rest
}: SecondaryButtonProps) {
  return (
    <Button
      buttonType={buttonType}
      to={to}
      variant="link"
      rightIcon={<SVGIcon id="arrow-right" />}
      className={composeClassNames(arrowAnimationStyle, subtleButtonStyle)}
      {...rest}
    >
      {children}
    </Button>
  );
}
