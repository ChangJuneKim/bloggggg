import { style } from '@vanilla-extract/css';
import { baseSizes } from '@/styles/tokens/space';

export const themeButton = style({
  marginLeft: baseSizes[5],
  minWidth: '50px',
});
