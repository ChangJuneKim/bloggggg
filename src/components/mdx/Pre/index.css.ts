import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/styles/themes/contract.css';

export const codeHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  borderLeft: '1px',
  borderRight: '1px',
  borderStyle: 'solid',
  borderColor: vars.color.borderColor,
  background: vars.color.ghostBg,
  paddingBottom: vars.space[2],
  paddingLeft: vars.space[4],
  paddingRight: vars.space[5],
});

globalStyle(`${codeHeader} + pre`, {
  marginTop: 0,
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: vars.color.borderColor,
});
