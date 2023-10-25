import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/themes/contract.css';
import { calc } from '@vanilla-extract/css-utils';

export const introduceSection = style({
  display: 'flex',
  width: vars.space.full,
  alignItems: 'center',
  justifyContent: 'center',
  padding: vars.space['4'],
  marginBottom: vars.space['4'],
});

export const profileContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: vars.borderRadius.full,
  background: vars.color.wordHighlight,
  backdropFilter: 'blur(3px)',
  padding: vars.space['1'],
  flexBasis: '25%',
  maxWidth: '100px',
  marginRight: vars.space['4'],
});

export const profileImage = style({
  borderRadius: vars.borderRadius.full,
  overflow: 'hidden',
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
