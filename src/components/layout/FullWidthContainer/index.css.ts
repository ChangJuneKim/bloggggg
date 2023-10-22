import { style, StyleRule, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/themes/contract.css';
import { themesSelectors } from '@/styles/atoms.css';
import { ContainerVariants } from '@/components/base/Container/index.css';
import { colorPalette } from '@/styles/tokens/colors';
import { zIndices } from '@/styles/tokens/z-indices';
import { topToBottomGradient } from '@/utils/color';

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
        background: topToBottomGradient(colorPalette.blueGray[900], vars.color.bg),
      },
    },
  },
  light: {
    background: colorPalette.blueGray[50],
    selectors: {
      [themesSelectors.dark]: {
        background: topToBottomGradient(vars.color.bg, colorPalette.blueGray[800]),
      },
    },
  },
  dark: {
    background: topToBottomGradient(colorPalette.blue[700], colorPalette.blue[500]),
    selectors: {
      [themesSelectors.dark]: {
        background: topToBottomGradient(colorPalette.blueGray[950], colorPalette.blueGray[900]),
      },
    },
  },
  navigation: {
    background: vars.color.navigationBg,
    backdropFilter: `blur(8px)`,
    position: `fixed`,
    display: `flex`,
    zIndex: zIndices.sticky,
  },
  fullBleed: {
    background: `transparent`,
    color: `white`,
    display: `flex`,
    zIndex: zIndices.sticky,
  },
};

export const fullWidthContainerVariants = styleVariants(fullWidthContainers, (fwc) => [
  fwcBaseStyle,
  fwc,
]);
