import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/themes/contract.css';
import { minMediaQuery } from '@/styles/tokens/breakpoints';

export const postToolbarStyle = style({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: vars.space['8'],
  gap: vars.space['4'],
  '@media': {
    [minMediaQuery('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: vars.space['12'],
    },
  },
});
