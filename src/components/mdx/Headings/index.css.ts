import { globalStyle, style, StyleRule, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/themes/contract.css';
import { pseudoSelectors } from '@/styles/selectors';
import { minMediaQuery } from '@/styles/tokens/breakpoints';
import { transition } from '@/styles/tokens/motion';

export const introductionStyle = style({
  marginTop: `0 !important`,
  marginBottom: `0 !important`,
});

export const headingStyle = style({});

globalStyle(`${headingStyle}:hover a`, {
  visibility: `visible`,
});

export const anchorStyle = style([
  {
    left: `calc(${vars.space[5]} * -1)`,
    transitionDuration: transition.duration.normal,
    visibility: `hidden`,
    textDecoration: `none !important`,
    opacity: 0.3,
    selectors: {
      [pseudoSelectors.hover]: {
        opacity: 1,
        color: vars.color.primary,
      },
    },
    '@media': {
      [minMediaQuery(`sm`)]: {
        left: `calc(${vars.space[7]} * -1)`,
      },
      [minMediaQuery(`lg`)]: {
        left: `calc(${vars.space[10]} * -1)`,
      },
    },
  },
]);

const headingBaseStyle = style({
  fontWeight: vars.fontWeight.bold,
  color: vars.color.heading,
  scrollMarginTop: '70px',
});

export type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const headings: Record<Headings, StyleRule> = {
  h1: {
    fontWeight: vars.fontWeight.bold,
    letterSpacing: vars.letterSpacing.wide,
    lineHeight: vars.lineHeight[`4xl`],
    marginTop: vars.space[0],
    marginBottom: vars.space[4],
    fontSize: vars.fontSize[`2xl`],
    '@media': {
      [minMediaQuery(`sm`)]: {
        fontSize: vars.fontSize[`3xl`],
      },
      [minMediaQuery(`lg`)]: {
        fontSize: vars.fontSize[`4xl`],
      },
      [minMediaQuery(`xl`)]: {
        fontSize: vars.fontSize[`4xl`],
      },
    },
  },
  h2: {
    fontWeight: vars.fontWeight.bold,
    lineHeight: vars.lineHeight[`3xl`],
    marginBottom: vars.space[6],
    fontSize: vars.fontSize.xl,
    '@media': {
      [minMediaQuery(`sm`)]: {
        fontSize: vars.fontSize[`2xl`],
      },
      [minMediaQuery(`lg`)]: {
        fontSize: vars.fontSize[`3xl`],
      },
      [minMediaQuery(`xl`)]: {
        fontSize: vars.fontSize[`3xl`],
      },
    },
  },
  h3: {
    fontWeight: vars.fontWeight.semibold,
    lineHeight: vars.lineHeight[`2xl`],
    marginBottom: vars.space[3],
    fontSize: vars.fontSize.lg,
    '@media': {
      [minMediaQuery(`sm`)]: {
        fontSize: vars.fontSize.xl,
      },
      [minMediaQuery(`lg`)]: {
        fontSize: vars.fontSize[`2xl`],
      },
      [minMediaQuery(`xl`)]: {
        fontSize: vars.fontSize[`2xl`],
      },
    },
  },
  h4: {
    fontWeight: vars.fontWeight.semibold,
    lineHeight: vars.lineHeight.xl,
    marginBottom: vars.space[2],
    fontSize: vars.fontSize.lg,
    '@media': {
      [minMediaQuery(`lg`)]: {
        fontSize: vars.fontSize.xl,
      },
      [minMediaQuery(`xl`)]: {
        fontSize: vars.fontSize[`2xl`],
      },
    },
  },
  h5: {},
  h6: {},
};

export const headingVariants = styleVariants(headings, (heading) => [headingBaseStyle, heading]);
