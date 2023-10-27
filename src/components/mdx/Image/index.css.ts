import { style } from '@vanilla-extract/css';
import { minMediaQuery } from '@/styles/tokens/breakpoints';
import { vars } from '@/styles/themes/contract.css';

export const base = {
  height: 'auto',
};
export const imageStyle = style({
  borderRadius: vars.borderRadius.lg,
  overflow: 'hidden',
  width: '75%',
  ...base,
  '@media': {
    [minMediaQuery(`lg`)]: {
      width: '60%',
      ...base,
    },
    [minMediaQuery(`2xl`)]: {
      width: '40%',
      ...base,
    },
  },
});

export const figcaptionItalic = style({
  fontStyle: 'italic',
});
