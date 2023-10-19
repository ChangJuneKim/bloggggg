import { ComponentPropsWithRef } from 'react';
import { createBox } from '@/components/base/Box/createBox';
import { atoms } from '@/styles/atoms.css';

export const Box = createBox({ atoms });

export interface BoxProps extends ComponentPropsWithRef<typeof Box> {}
