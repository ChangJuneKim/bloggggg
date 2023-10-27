import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/styles/themes/contract.css';

export const TocStyle = style({
  position: 'sticky',
  top: '10%',
  color: vars.color.textProse,
  padding: vars.space['3'],
  borderLeft: `2px solid ${vars.color.borderColor}`,
});

globalStyle(`${TocStyle} ul`, {
  listStyle: 'none',
});

globalStyle(`${TocStyle} ul li a`, {
  textDecoration: 'none',
  fontWeight: vars.fontWeight.medium,
});
