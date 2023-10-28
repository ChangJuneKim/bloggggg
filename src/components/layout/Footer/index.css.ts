import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/themes/contract.css';
import { minMediaQuery } from '@/styles/tokens/breakpoints';

export const borderTop = style({
  borderTop: '1px solid',
  borderColor: vars.color.borderColor,
  '@media': {
    [minMediaQuery(`lg`)]: {
      paddingLeft: vars.space[8],
      paddingRight: vars.space[8],
    },
  },
});
