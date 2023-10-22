import { style } from '@vanilla-extract/css';
import { minMediaQuery } from '@/styles/tokens/breakpoints';

export const base = {
  height: 'auto',
};
export const imageStyle = style({
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
