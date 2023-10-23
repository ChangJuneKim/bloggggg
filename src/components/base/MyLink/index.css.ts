import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/styles/themes/contract.css';
import { pseudoSelectors } from '@/styles/selectors';
import { transition } from '@/styles/tokens/motion';

export const link = style({
  selectors: {
    [pseudoSelectors.hover]: {
      color: vars.color.primary,
      transitionDuration: transition.duration.slow,
    },
  },
  textDecoration: 'none',
  fontWeight: vars.fontWeight.semibold,
  transitionDuration: transition.duration['ultra-slow'],
});

globalStyle(`${link}.active`, {
  color: vars.color.primary,
});
