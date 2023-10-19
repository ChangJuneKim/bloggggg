import * as React from 'react';
import { Atoms } from '@/styles/atoms.css';
import { Box } from '@/components/base';

interface SpacerProps extends Atoms {
  size: Atoms['width'];
  axis: 'vertical' | 'horizontal';
}

export const Spacer = ({ size, axis, ...rest }: SpacerProps) => {
  const width = axis === `vertical` ? `px` : size;
  const height = axis === `horizontal` ? `px` : size;
  return (
    <Box
      as="span"
      width={width}
      height={height}
      minWidth={width}
      minHeight={height}
      display="block"
      {...rest}
    />
  );
};
