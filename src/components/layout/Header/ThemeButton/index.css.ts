import { style } from '@vanilla-extract/css';
import { baseSizes } from '@/styles/tokens/space';
import { vars } from '@/styles/themes/contract.css';
import { pseudoSelectors } from '@/styles/selectors';
import { transparentize } from '@/utils/color';
import { colorPalette } from '@/styles/tokens/colors';

export const themeButton = style({
  selectors: {
    [pseudoSelectors.hover]: {
      backgroundColor: transparentize(colorPalette.gray['600'], 0.8),
    },
  },
  display: 'flex',
  marginLeft: baseSizes[5],
  minWidth: '26px',
  borderRadius: vars.borderRadius.full,
  aspectRatio: '1',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'red',
  backgroundColor: 'transparent',
});
