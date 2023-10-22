import * as React from 'react';
import { ReactNode } from 'react';
import {
  alertIconStyle,
  AlertStatus,
  alertTitleStyle,
  alertVariants,
} from '@/components/mdx/Alert/index.css';
import { Box, SVGIcon } from '@/components/base';

interface AlertProps {
  title: string;
  status: AlertStatus;
  children: ReactNode;
}

const iconMap = {
  info: `info`,
  warning: `warning`,
  success: `check`,
  error: `warning`,
} as const;

export default function Alert({ title, status, children }: AlertProps) {
  return (
    <Box
      borderRadius="lg"
      position="relative"
      my={[`6`, null, null, `12`]}
      px="4"
      py="4"
      width="auto"
      role="alert"
      data-testid={`alert-${status}`}
      className={alertVariants[status]}
    >
      <Box display="flex" flexDirection="row" alignItems="center" marginBottom="4">
        <Box className={alertIconStyle}>
          <SVGIcon id={iconMap[status]} />
        </Box>
        <Box fontWeight="bold" className={alertTitleStyle}>
          {title}
        </Box>
      </Box>
      {children}
    </Box>
  );
}