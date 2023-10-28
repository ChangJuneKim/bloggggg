import { style, StyleRule, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/themes/contract.css';
import { minMediaQuery } from '@/styles/tokens/breakpoints';
import { colorPalette } from '@/styles/tokens/colors';
import { themesSelectors } from '@/styles/atoms.css';

const containerBaseStyle = style({
  width: vars.space.full,
  marginLeft: vars.space.auto,
  marginRight: vars.space.auto,
  maxWidth: `1024px`,
  paddingLeft: vars.space[8],
  paddingRight: vars.space[8],
  '@media': {
    [minMediaQuery(`sm`)]: {
      // marginLeft: vars.space.auto,
      // marginRight: vars.space.auto,
      paddingLeft: vars.space[8],
      paddingRight: vars.space[8],
    },
    [minMediaQuery(`lg`)]: {
      // marginLeft: vars.space.auto,
      // marginRight: vars.space.auto,
      paddingLeft: vars.space[8],
      paddingRight: vars.space[8],
    },
    [minMediaQuery(`2xl`)]: {
      // marginLeft: vars.space.auto,
      paddingLeft: vars.space[0],
      paddingRight: vars.space[0],
    },
  },
});

export type ContainerVariants = 'default' | 'hero' | 'light' | 'dark' | 'navigation' | 'fullBleed';

const containers: Record<ContainerVariants, StyleRule> = {
  default: {},
  hero: {
    marginLeft: vars.space.auto,
    marginRight: vars.space.auto,
    '@media': {
      [minMediaQuery(`lg`)]: {
        marginLeft: vars.space.auto,
        marginRight: vars.space.auto,
        paddingLeft: vars.space[8],
        paddingRight: vars.space[8],
      },
    },
  },
  light: {},
  dark: {
    color: colorPalette.blueGray[900],
    selectors: {
      [themesSelectors.dark]: {
        color: colorPalette.blueGray[300],
      },
    },
  },
  navigation: {
    marginLeft: vars.space.auto,
    marginRight: vars.space.auto,
    '@media': {
      [minMediaQuery(`lg`)]: {
        marginLeft: vars.space.auto,
        marginRight: vars.space.auto,
        paddingLeft: vars.space[8],
        paddingRight: vars.space[8],
      },
    },
  },
  fullBleed: {
    marginLeft: 'revert',
    marginRight: 'revert',
    maxWidth: vars.space.full,
  },
};

export const containerVariants = styleVariants(containers, (container) => [
  containerBaseStyle,
  container,
]);
