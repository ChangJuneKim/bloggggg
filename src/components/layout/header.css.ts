import { style } from '@vanilla-extract/css';
import { pseudoSelectors } from '@/styles/selectors';
import { vars } from '@/styles/themes/contract.css';
import { baseSizes, navigation, space } from '@/styles/tokens/space';
import { fontSizes } from '@/styles/tokens/typography';

export const header = style({
  display: 'flex',
  justifyContent: 'center',
  padding: '8px',
  transition: 'background-color 0.3s',
  position: 'sticky',
  top: '0',
  zIndex: '1000',
  backgroundColor: 'transparent',
  height: `${navigation.navigationHeight}`,
});

export const headerContent = style({
  width: '50%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const scrolledHeader = style({
  backgroundColor: 'rgba(0, 23, 23, 0.8)', // 반투명한 검은색 배경
});

export const logoContainer = style({
  selectors: {
    [pseudoSelectors.hover]: {
      transform: `scale(1.1)`,
    },
  },
  transform: `scale(1)`,
  transition: `transform 0.3s ease-in`,
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

export const linkItem = style({
  height: space.full,
});

export const link = style({
  display: 'inline-flex',
  alignItems: 'center',
  color: vars.color.text,
  textDecoration: 'none',
  margin: '0 8px',
  height: space.full,
});
