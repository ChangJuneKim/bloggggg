import { style } from '@vanilla-extract/css';

export const header = style({
  display: 'flex',
  justifyContent: 'center',
  padding: '8px',
  transition: 'background-color 0.3s',
  position: 'sticky',
  top: '0',
  zIndex: '1000',
  backgroundColor: 'transparent',
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
  color: '#fff',
});
export const linkStyle = style({
  color: '#fff',
  textDecoration: 'none',
  margin: '0 8px',
});
