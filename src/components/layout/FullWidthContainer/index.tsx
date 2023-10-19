import * as React from 'react';
import { Box, Container } from '@/components/base';
import {
  FullWidthContainerVariants,
  fullWidthContainerVariants,
} from '@/components/layout/FullWidthContainer/index.css';
import { BoxProps } from '@/components/base/Box';

interface FullWidthContainerProps extends BoxProps {
  variant?: FullWidthContainerVariants;
}

export default function FullWidthContainer({
  variant = `default`,
  children,
  ...rest
}: FullWidthContainerProps) {
  return (
    <Box className={fullWidthContainerVariants[variant]} {...rest}>
      <Container variant={variant}>{children}</Container>
    </Box>
  );
}
