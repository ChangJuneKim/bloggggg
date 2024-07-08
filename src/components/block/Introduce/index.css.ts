import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/styles/themes/contract.css';
import { calc } from '@vanilla-extract/css-utils';
import { minMediaQuery } from '@/styles/tokens/breakpoints';

export const introduceSection = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: vars.space.full,
  padding: vars.space['4'],
  '@media': {
    [minMediaQuery('md')]: {
      flexDirection: 'row',
    },
  },
});

export const profileContainer = style({
  marginBottom: vars.space['4'],
  display: 'flex',
  borderRadius: vars.borderRadius.full,
  background: vars.color.wordHighlight,
  backdropFilter: 'blur(3px)',
  padding: vars.space['1'],
  aspectRatio: '1 / 1',

  '@media': {
    [minMediaQuery('md')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: vars.borderRadius.full,
      background: vars.color.wordHighlight,
      backdropFilter: 'blur(3px)',
      padding: vars.space['1'],
      flexBasis: '25%',
      marginRight: vars.space['4'],
      maxWidth: '102px',
    },
  },
});

export const profileImage = style({
  borderRadius: vars.borderRadius.full,
  overflow: 'hidden',
  width: 'auto',
  height: 'auto',
});

globalStyle(`${profileImage} img`, {
  width: '100%',
  height: '100%',
  aspectRatio: '1 / 1',
  objectFit: 'cover',
});

export const introduce = style({
  flexBasis: '75%',
  display: 'flex',
  flexDirection: 'column',
});

export const myName = style({
  fontSize: vars.fontSize.lgx,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.textProse,
  marginTop: calc.negate(vars.space['4']),
  marginBottom: vars.space['2'],
});

export const oneLiner = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.textMuted,
});
