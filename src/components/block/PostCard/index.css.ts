import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/styles/themes/contract.css';
import { pseudoSelectors } from '@/styles/selectors';
import { calc } from '@vanilla-extract/css-utils';
import { leftToRightGradient } from '@/utils/color';

export const list = style({
  [pseudoSelectors.notFirst]: {
    borderTop: '1px solid',
    borderColor: vars.color.borderColor,
  },
  padding: vars.space['3'],
  paddingBottom: 0,
});
export const link = style({});

globalStyle(`${link}:hover h4`, {
  color: vars.color.primary,
});

export const article = style({
  selectors: {
    [pseudoSelectors.hover]: {
      transform: 'translateX(10px);',
    },
    [pseudoSelectors.before]: {
      content: '',
      display: 'block',
      position: 'absolute',
      width: vars.space['1'],
      height: vars.space.full,
      background: leftToRightGradient(vars.color.primary, vars.color.navigationBg),
      borderRadius: vars.borderRadius.base,
      opacity: 0,
      transform: 'translateX(0px)',
      left: calc.negate(vars.space['6']),
      transition: 'transform 0.5s ease 0s, opacity 0.5s ease 0s;',
    },
  },

  overflow: 'hidden',
  marginTop: '0.5rem',
  marginBottom: '0.5rem',
  padding: vars.space['1'],
  position: 'relative',
  transition: 'transform 0.5s ease 0s, opacity 0.5s ease 0s;',

  '@media': {
    '(min-width: 640px)': {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: '1rem',
    },
  },
});

globalStyle(`${article}:hover:before`, {
  opacity: 1,
});

export const titleStyle = style({
  fontSize: vars.fontSize['xl'],
  fontWeight: vars.fontWeight.semibold,
  marginBottom: vars.space['2'],
});

export const descStyle = style({
  selectors: {
    [pseudoSelectors.hover]: {
      color: vars.color.text,
    },
  },
  fontSize: vars.fontSize['md'],
  fontWeight: '400',
  marginBottom: vars.space['2'],
});

export const readingTimeStyle = style({
  fontSize: '0.75rem',
});

export const imageContainer = style({
  width: 'fit-content',
  height: 'fit-content',
  gridColumn: 'span 1/span 1',
  '@media': {
    '(max-width: 640px)': {
      display: 'none',
    },
  },
});

export const content = style({
  gridColumn: 'span 4/span 4',
  '@media': {
    '(max-width: 640px)': {
      width: '100%',
    },
  },
});
