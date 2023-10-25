import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/themes/contract.css';
import { baseSizes, navigation, space } from '@/styles/tokens/space';
import { fontSizes } from '@/styles/tokens/typography';
import { zIndices } from '@/styles/tokens/z-indices';
import { colorPalette } from '@/styles/tokens/colors';

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '8px',
  transition: 'background-color 0.3s',
  position: 'sticky',
  top: '0',
  zIndex: zIndices.banner,
  height: `${navigation.navigationHeight}`,
});

export const isTopBackground = style({
  boxShadow: `0px 1px 3px rgba(59, 130, 246, 0.1), 0px 1px 2px rgba(59, 130, 246, 0.06)`,
  background: `${vars.color.navigationBg} !important`,
  transition: 'box-shadow 0.4s ease, background 0.4s ease',
});

export const isTopColor = style({
  color: `${vars.color.text} !important`,
});

export const isHomePath = style({
  color: colorPalette.gray['50'],
});

export const hideHeaderShadow = style({
  transition: 'box-shadow 1s ease-in-out, background 0.4s ease',
});

export const title = style({
  color: vars.color.text,
  marginLeft: baseSizes[2],
  fontSize: fontSizes.xl,
});

export const navi = style({
  display: 'flex',
  listStyle: 'none',
  height: space.full,
});
