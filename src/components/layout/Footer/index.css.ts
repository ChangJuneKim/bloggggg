import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/themes/contract.css';

export const borderTop = style({
  borderTop: '1px solid',
  borderColor: vars.color.borderColor,
});
