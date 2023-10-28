import React, { ReactNode } from 'react';
import { Box } from '@/components/base';
import {
  flexBasisContainer,
  flexBasisContainerLeft,
  flexBasisContainerRight,
} from '@/components/layout/FlexBasisContainer/index.css';

interface FlexBasisLayoutProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
  reverse?: boolean;
}

export default function FlexBasisLayout({
  leftContent,
  rightContent,
  reverse = false,
}: FlexBasisLayoutProps) {
  return (
    <Box
      display="flex"
      className={flexBasisContainer}
      flexDirection={reverse ? 'column-reverse' : undefined}
    >
      <Box className={flexBasisContainerLeft}>{leftContent}</Box>
      <Box className={flexBasisContainerRight}>{rightContent}</Box>
    </Box>
  );
}
