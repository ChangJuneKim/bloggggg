import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/themes/contract.css';

export const scrollIndicatorWrapper = style({
  position: 'fixed',
  top: vars.space.navigationHeight,
  left: 0,
  width: '100%',
  height: vars.space['1'],
  backgroundColor: vars.color.bg,
  zIndex: 9999,
});

export const scrollIndicatorStyle = style({
  height: vars.space['1'],
  backgroundColor: vars.color.primary,
  width: '0%',
});
