import { globalStyle, style } from '@vanilla-extract/css';
import { pseudoSelectors } from '@/styles/selectors';
import { vars } from '@/styles/themes/contract.css';

export const iconGrid = style({
  display: 'flex',
  justifyContent: 'center',
  gap: vars.space['4'],
  alignItems: 'center',
  width: '100%',
  padding: '10px',
  marginBottom: vars.space['6'],
});

export const iconContainer = style({
  selectors: {
    [pseudoSelectors.hover]: {
      background: vars.color.wordHighlight,
    },
  },
  display: 'inline-flex',
  position: 'relative',
  verticalAlign: 'middle',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '24px',
  cursor: 'pointer',
  transition: 'background 0.8s',
  padding: '0.5rem',
  width: '36px',
  height: '36px',
  borderRadius: vars.borderRadius.full,
});

export const label = style({
  selectors: {
    [pseudoSelectors.after]: {
      content: '""',
      position: 'absolute',
      bottom: vars.space.full,
      left: '50%',
      marginLeft: '-5px',
      width: vars.space['0'],
      height: vars.space['0'],
      borderBottom: `5px solid ${vars.color.wordHighlight}`,
      borderRight: '5px solid transparent',
      borderLeft: '5px solid transparent',
    },
  },

  position: 'relative',
  marginTop: vars.space['4'],
  fontSize: vars.fontSize.xs,
  textAlign: 'center',
  padding: '2px 6px',
  transformOrigin: 'top',
  transform: 'scaleY(0)',
  transition: 'opacity 0.3s, transform 0.1s',
  opacity: 0,
  borderRadius: vars.borderRadius.sm,
  backgroundColor: vars.color.wordHighlight,
  color: vars.color.textProse,
});

globalStyle(`${iconContainer}:hover ${label}`, {
  opacity: 1,
  transform: 'scaleY(1)',
});

globalStyle(`${iconContainer} svg`, {
  minHeight: vars.space.full,
  transition: 'color 0.3s',
});

globalStyle(`${iconContainer}:hover svg`, {
  color: vars.color.primary,
});
