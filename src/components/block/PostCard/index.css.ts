import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/styles/themes/contract.css';
import { pseudoSelectors } from '@/styles/selectors';
import { minMediaQuery } from '@/styles/tokens/breakpoints';
import { zIndices } from '@/styles/tokens/z-indices';
import { calc } from '@vanilla-extract/css-utils';

export const list = style({
  [pseudoSelectors.notFirst]: {
    borderTop: '1px solid',
    borderColor: vars.color.borderColor,
  },
  paddingBottom: 0,
});
export const link = style({});

globalStyle(`${link}:hover h4, ${link}:hover p`, {
  color: vars.color.primary,
  opacity: 0.8,
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
      width: vars.space.full,
      height: vars.space.full,
      background: `linear-gradient(90deg, ${vars.color.primary} 0%, transparent 100%)`,
      borderRadius: vars.borderRadius['xl'],
      opacity: 0,
      zIndex: zIndices.hide,
      transform: 'translateX(0px)',
      left: calc.negate(vars.space['0']),
      transition: 'transform 0.5s ease 0s, opacity 0.5s ease 0s, filter 0.5s ease 0s',
      filter: 'blur(0px)',
    },
  },

  overflow: 'hidden',
  marginTop: '0.5rem',
  marginBottom: '0.5rem',
  padding: vars.space['1'],
  paddingLeft: vars.space['0'],
  position: 'relative',
  borderRadius: vars.borderRadius.xl,
  transition: 'transform 0.5s ease 0s, opacity 0.5s ease 0s, filter 0.5s ease 0s',

  '@media': {
    [minMediaQuery('sm')]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: '1rem',
      paddingLeft: vars.space['3'],
    },
  },
});

globalStyle(`${article}:hover:before`, {
  opacity: 0.2,
  filter: 'blur(200px)',
});

export const titleStyle = style({
  fontSize: vars.fontSize['xl'],
  fontWeight: vars.fontWeight.semibold,
  marginBottom: vars.space['2'],
});

export const descStyle = style({
  fontSize: vars.fontSize['md'],
  fontWeight: '400',
  marginBottom: vars.space['2'],
});

export const readingTimeStyle = style({
  fontSize: '0.875rem',
  opacity: 0.9,
});

export const imageContainer = style({
  width: 'fit-content',
  height: 'fit-content',
  gridColumn: 'span 1/span 1',
  overflow: 'hidden',
  '@media': {
    '(max-width: 640px)': {
      display: 'none',
    },
  },
});

globalStyle(`${imageContainer} img`, {
  aspectRatio: '1 / 1',
  objectFit: 'cover',
});

export const content = style({
  width: '100%',
  paddingLeft: vars.space['3'],
  '@media': {
    [minMediaQuery('sm')]: {
      gridColumn: 'span 4/span 4',
    },
  },
});
