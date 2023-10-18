import * as React from 'react';
import { createBox } from '@/components/base/Box/createBox';
import { atoms } from '@/styles/atoms.css';

export const Box = createBox({ atoms });

export interface IBoxProps extends React.ComponentPropsWithRef<typeof Box> {}
