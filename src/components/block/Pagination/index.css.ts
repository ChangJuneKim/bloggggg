import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/styles/themes/contract.css';
import { pseudoSelectors } from '@/styles/selectors';

export const pagination = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: vars.space['1'],
  margin: vars.space['4'],
  padding: '0.5rem 1rem',
  borderRadius: vars.borderRadius.lg,
});

export const pageNationButtons = style({
  selectors: {
    [pseudoSelectors.disabled]: {
      pointerEvents: 'none',
      // background: vars.color.proseLinkDecoration,
      // visibility: "hidden"
    },
    [pseudoSelectors.hover]: {
      color: vars.color.bgHover,
      background: vars.color.primaryHover,
    },
  },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'none',
  borderRadius: vars.borderRadius.lg,
  width: vars.space['10'],
  height: vars.space['10'],
  margin: 0,
  color: 'gray',
  cursor: 'pointer',
});

globalStyle(`${pageNationButtons} svg`, {
  color: vars.color.primary,
});
globalStyle(`${pageNationButtons}:disabled svg`, {
  color: vars.color.inherit,
});

globalStyle(`${pageNationButtons}[aria-current='page']`, {
  background: vars.color.primary,
  color: 'white',
});

globalStyle(`${pageNationButtons}:hover svg`, {
  color: vars.color.primary,
});
