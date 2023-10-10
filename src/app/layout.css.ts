import { style } from '@vanilla-extract/css';

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px',
  borderBottom: '1px solid #132f52',
});

export const link = style({
  color: 'red',
  margin: '0 8px',
});
