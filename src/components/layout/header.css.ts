import { style } from '@vanilla-extract/css';
import { pseudoSelectors } from '@/styles/selectors';
import { vars } from '@/styles/themes/contract.css';
import { navigation } from '@/styles/tokens/space';

export const logoStyle = style({
  transform: `scale(1)`,
  selectors: {
    [pseudoSelectors.hover]: {
      transform: `scale(1.1)`,
    },
  },
});

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

export const title = style({
  color: vars.color.text,
});

export const navi = style({
  display: 'flex',
  listStyle: 'none',
  height: '100%',
});

export const linkItem = style({
  height: '100%',
});

export const link = style({
  display: 'inline-flex',
  alignItems: 'center',
  color: vars.color.text,
  textDecoration: 'none',
  margin: '0 8px',
  height: '100%',
});
