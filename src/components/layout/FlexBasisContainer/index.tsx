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
}

export default function FlexBasisLayout({ leftContent, rightContent }: FlexBasisLayoutProps) {
  return (
    <Box display="flex" className={flexBasisContainer}>
      <Box className={flexBasisContainerLeft}>{leftContent}</Box>
      <Box className={flexBasisContainerRight}>{rightContent}</Box>
    </Box>
  );
}
