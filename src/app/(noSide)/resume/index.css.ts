import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/styles/themes/contract.css';

export const resumeStyle = style({});

globalStyle(`${resumeStyle} h3`, {
  fontSize: vars.fontSize.lgx,
  fontWeight: vars.fontWeight.semibold,
  marginBottom: vars.space['4'],
});
