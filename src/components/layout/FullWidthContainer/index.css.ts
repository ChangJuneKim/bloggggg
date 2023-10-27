import { style, StyleRule, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/themes/contract.css';
import { themesSelectors } from '@/styles/atoms.css';
import { ContainerVariants } from '@/components/base/Container/index.css';
import { colorPalette } from '@/styles/tokens/colors';
import { zIndices } from '@/styles/tokens/z-indices';
import { topToTopGradient } from '@/utils/color';

export type FullWidthContainerVariants = Exclude<ContainerVariants, 'proseRoot'>;

const fwcBaseStyle = style({
  width: vars.space.full,
  margin: vars.space[0],
});

const fullWidthContainers: Record<FullWidthContainerVariants, StyleRule> = {
  default: {
    background: vars.color.bg,
  },
  hero: {
    background: vars.color.bg,
    selectors: {
      [themesSelectors.dark]: {
        background: topToTopGradient(colorPalette.blueGray[900], vars.color.bg),
      },
    },
  },
  light: {
    background: colorPalette.blueGray[50],
    selectors: {
      [themesSelectors.dark]: {
        background: topToTopGradient(vars.color.bg, colorPalette.blueGray[800]),
      },
    },
  },
  dark: {
    background: topToTopGradient(colorPalette.blue[100], colorPalette.blue[50]),
    width: '100%',
    selectors: {
      [themesSelectors.dark]: {
        background: topToTopGradient(colorPalette.blueGray[950], colorPalette.blueGray[900]),
      },
    },
  },
  navigation: {
    background: 'transparent',
    backdropFilter: `blur(0)`,
    position: `fixed`,
    display: `flex`,
    zIndex: zIndices.sticky,
  },
  fullBleed: {
    background: vars.color.bg,
    height: vars.space.full,
    // background: `transparent`,
    // color: `white`,
    // display: `flex`,
    // zIndex: zIndices.sticky,
  },
};

export const fullWidthContainerVariants = styleVariants(fullWidthContainers, (fwc) => [
  fwcBaseStyle,
  fwc,
]);
