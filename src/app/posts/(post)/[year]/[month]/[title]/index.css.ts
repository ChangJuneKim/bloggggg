import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/themes/contract.css';

export const postTitle = style({
  fontSize: vars.fontSize['3xl'],
  fontWeight: vars.fontWeight.bold,
  margin: 0,
});
