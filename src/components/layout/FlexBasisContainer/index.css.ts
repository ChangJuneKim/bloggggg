import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/styles/themes/contract.css';
import { minMediaQuery } from '@/styles/tokens/breakpoints';
import { shadows } from '@/styles/tokens/shadows';

export const flexBasisContainer = style({
  paddingTop: vars.space['6'],
  paddingBottom: vars.space['6'],
  borderBottom: `1px solid ${vars.color.divider}`,
  flexDirection: 'column',
  '@media': {
    [minMediaQuery('sm')]: {
      flexDirection: 'row',
    },
  },
});

globalStyle(`${flexBasisContainer} p`, {
  marginBottom: vars.space['2'],
  color: vars.color.textProse,
});

export const flexBasisContainerLeft = style({
  flexBasis: '25%',
  marginBottom: vars.space['6'],
  '@media': {
    [minMediaQuery('sm')]: {
      marginBottom: vars.space['0'],
    },
  },
});

globalStyle(`${flexBasisContainerLeft} > div, ${flexBasisContainerLeft} > svg`, {
  width: '100px',
  height: '100px',
  borderRadius: vars.borderRadius.lg,
  boxShadow: shadows.md,
  overflow: 'hidden',
});

export const flexBasisContainerRight = style({
  flexBasis: '75%',
});
