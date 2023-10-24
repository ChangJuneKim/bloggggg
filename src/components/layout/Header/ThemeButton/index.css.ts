import { style } from '@vanilla-extract/css';
import { baseSizes } from '@/styles/tokens/space';
import { vars } from '@/styles/themes/contract.css';
import { pseudoSelectors } from '@/styles/selectors';

export const themeButton = style({
  selectors: {
    [pseudoSelectors.hover]: {
      backgroundColor: vars.color.mutedAsBg,
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
