import { style } from '@vanilla-extract/css';
import { pseudoSelectors } from '@/styles/selectors';

export const logoContainer = style({
  selectors: {
    [pseudoSelectors.hover]: {
      transform: `scale(1.1)`,
    },
  },
  transform: `scale(1)`,
  transition: `transform 0.3s ease-in`,
});
