// styles.css.ts
import { globalStyle } from '@vanilla-extract/css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  border: '0 none',
  fontSize: '100%',
  font: 'inherit',
  verticalAlign: 'baseline',
});

globalStyle('body', {
  lineHeight: 1,
});

globalStyle('ol, ul', {
  listStyle: 'none',
});

globalStyle('blockquote, q', {
  quotes: 'none',
});

globalStyle('blockquote::before, blockquote::after, q::before, q::after', {
  content: 'none',
});
