import { style } from '@vanilla-extract/css';
import { minMediaQuery } from '@/styles/tokens/breakpoints';
import { vars } from '@/styles/themes/contract.css';

export const base = {
  height: 'auto',
};
export const imageStyle = style({
  borderRadius: vars.borderRadius.md,
  overflow: 'hidden',
  marginBottom: '0.25rem',
  width: '90%',
  ...base,
  '@media': {
    [minMediaQuery(`lg`)]: {
      width: '80%',
      ...base,
    },
    [minMediaQuery(`2xl`)]: {
      width: '75%',
      ...base,
    },
  },
});

export const figcaptionItalic = style({
  fontStyle: 'italic',
});
