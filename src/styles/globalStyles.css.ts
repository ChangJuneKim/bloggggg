import { globalStyle } from '@vanilla-extract/css';
import { vars } from './themes/contract.css';
import { colorPalette } from './tokens/colors';

globalStyle('html', {
  scrollPaddingTop: 'calc(${space.navigationHeight} + ${vars.space[4]})',
  scrollBehavior: 'smooth',
});

globalStyle('body', {
  color: vars.color.text,
  background: vars.color.bg,
  lineHeight: vars.lineHeight.base,
  transitionProperty: 'background-color',
  transitionDuration: '0.3s',
  position: 'relative',
  minHeight: vars.space.full,
  fontFeatureSettings: 'kern',
  cursor: 'url(/assets/images/cursor.png), auto',
});

globalStyle('*', {
  borderColor: colorPalette.transparent,
  wordWrap: 'break-word',
  boxSizing: 'border-box',
  margin: vars.space[0],
  borderWidth: vars.space[0],
});

globalStyle('a', {
  backgroundColor: colorPalette.transparent,
  color: 'inherit',
  textDecoration: 'inherit',
});

globalStyle('img', {
  borderStyle: 'none',
});

globalStyle('hr', {
  boxSizing: 'content-box',
  height: vars.space[0],
  overflow: 'visible',
});

globalStyle('pre, code, kbd', {
  fontFamily:
    'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  fontSize: '1em',
});

globalStyle('button, input, select, textarea', {
  fontFamily: 'inherit',
  fontSize: '100%',
  lineHeight: 1.15,
  margin: vars.space[0],
});

globalStyle('button, input', {
  overflow: 'visible',
});

globalStyle('button, select', {
  textTransform: 'none',
});

globalStyle('textarea', {
  overflow: 'auto',
});

globalStyle('details', {
  display: 'block',
});

globalStyle('summary', {
  display: 'list-item',
});

globalStyle('body, blockquote, h1, h2, h3, h4, h5, h6, hr, figure, p, pre', {
  margin: vars.space[0],
});

globalStyle('button', {
  background: colorPalette.transparent,
  padding: vars.space[0],
  cursor: 'pointer',
});

globalStyle('ol, ul', {
  margin: vars.space[0],
  padding: vars.space[0],
});

globalStyle('table', {
  borderCollapse: 'collapse',
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  fontSize: 'inherit',
  fontWeight: 'inherit',
});

globalStyle('button, input, select, textarea', {
  padding: vars.space[0],
  lineHeight: 'inherit',
  color: 'inherit',
});

globalStyle('img, svg, video, canvas, audio, iframe, embed, object', {
  display: 'block',
});

globalStyle('img, video', {
  maxWidth: vars.space.full,
  height: vars.space.auto,
});
