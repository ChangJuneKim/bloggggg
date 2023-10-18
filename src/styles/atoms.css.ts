import { lightThemeClass } from '@/styles/themes/light.css';
import { darkThemeClass } from '@/styles/themes/dark.css';
import { createRainbowSprinkles, defineProperties } from 'rainbow-sprinkles';
import { zIndices } from '@/styles/tokens/z-indices';
import { vars } from '@/styles/themes/contract.css';
import { minMediaQuery } from '@/styles/tokens/breakpoints';

const unresponsiveAtomicProperties = defineProperties({
  dynamicProperties: {
    position: true,
    border: true,
    textAlign: true,
    zIndex: zIndices,
    fontWeight: vars.fontWeight,
    gap: vars.space,
    borderRadius: vars.borderRadius,
  },
  staticProperties: {
    position: [`relative`, `absolute`, `sticky`],
    opacity: [0, 0.1, 0.5, 1],
    border: [`none`],
    textAlign: [`left`, `center`, `right`],
  },
});

export const themesSelectors = {
  light: `html${lightThemeClass} &`,
  dark: `html${darkThemeClass} &`,
};

const colorAtomicProperties = defineProperties({
  conditions: {
    light: { selector: themesSelectors.light },
    dark: { selector: themesSelectors.dark },
  },
  defaultCondition: 'dark',
  dynamicProperties: {
    color: vars.color,
    background: vars.color,
  },
  shorthands: {
    bg: ['background'],
  },
});

const responsiveAtomicProperties = defineProperties({
  conditions: {
    mobile: {},
    sm: {
      '@media': minMediaQuery('sm'),
    },
    md: {
      '@media': minMediaQuery('md'),
    },
    lg: {
      '@media': minMediaQuery('lg'),
    },
    xl: {
      '@media': minMediaQuery('xl'),
    },
    '2xl': {
      '@media': minMediaQuery('2xl'),
    },
  },
  defaultCondition: 'mobile',
  dynamicProperties: {
    display: true,
    alignItems: true,
    justifyContent: true,
    flexDirection: true,
    flexWrap: true,
    fontSize: vars.fontSize,
    marginTop: vars.space,
    marginBottom: vars.space,
    marginRight: vars.space,
    marginLeft: vars.space,
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingRight: vars.space,
    paddingLeft: vars.space,
    height: vars.space,
    width: vars.space,
    minWidth: vars.space,
    minHeight: vars.space,
  },
  staticProperties: {
    display: [`block`, `inline-block`, `flex`, `inline-flex`],
    alignItems: [`center`],
    justifyContent: [`center`, `space-between`],
    flexDirection: [`row`, `column`],
  },
  shorthands: {
    m: ['marginBottom', 'marginTop', 'marginLeft', 'marginRight'],
    mx: ['marginLeft', 'marginRight'],
    my: ['marginTop', 'marginBottom'],
    p: ['paddingBottom', 'paddingTop', 'paddingLeft', 'paddingRight'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
  },
});

export const atoms = createRainbowSprinkles(
  unresponsiveAtomicProperties,
  colorAtomicProperties,
  responsiveAtomicProperties
);

export type Atoms = Parameters<typeof atoms>[0];
