import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/styles/themes/contract.css';
import { pseudoSelectors } from '@/styles/selectors';

export const projectTitle = style({
  selectors: {
    [pseudoSelectors.after]: {
      content: ' ↗ ',
      verticalAlign: 'middle',
    },
  },
  fontSize: vars.fontSize.lgx,
  textDecoration: 'underline dashed',
  textUnderlineOffset: '0.45em',
});

export const projectLeftFlexBasis = style({
  flexBasis: '45%',
});
export const projectRightFlexBasis = style({
  flexBasis: '55%',
});

globalStyle(`${projectRightFlexBasis} ul`, {
  listStyle: 'none',
});

globalStyle(`${projectRightFlexBasis} span`, {
  verticalAlign: 'middle',
});
