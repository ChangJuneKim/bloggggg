import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/styles/themes/contract.css';

export const codeHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  borderLeft: '1px',
  borderRight: '1px',
  borderStyle: 'solid',
  borderColor: vars.color.borderColor,
  background: vars.color.codeHeader,
  paddingBottom: vars.space[2],
  paddingLeft: vars.space[4],
  paddingRight: vars.space[5],
});

globalStyle(`${codeHeader} + pre`, {
  marginTop: 0,
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  borderTop: `1px solid ${vars.color.borderColor}`,
});

// globalStyle(`${codeHeader} button`, {
//   transform: 'translate(0, -28px)',
// });
