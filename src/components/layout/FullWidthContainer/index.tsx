import { Box, Container } from '@/components/base';
import {
  FullWidthContainerVariants,
  fullWidthContainerVariants,
} from '@/components/layout/FullWidthContainer/index.css';
import { BoxProps } from '@/components/base/Box';
import { composeClassNames } from '@/components/base/Box/createBox';

interface FullWidthContainerProps extends BoxProps {
  variant?: FullWidthContainerVariants;
}

export default function FullWidthContainer({
  variant = `default`,
  children,
  className = undefined,
  ...rest
}: FullWidthContainerProps) {
  return (
    <Box className={composeClassNames(fullWidthContainerVariants[variant], className)} {...rest}>
      <Container variant={variant}>{children}</Container>
    </Box>
  );
}
