import { globalStyle } from '@vanilla-extract/css';
import { vars } from '@/styles/themes/contract.css';

globalStyle(`div[data-rehype-pretty-code-fragment]`, {
  marginTop: vars.space[5],
  marginBottom: vars.space[5],
});

globalStyle(
  `html[class^='dark'] div[data-rehype-pretty-code-fragment] pre[data-theme='light'],
   html[class^='dark'] div[data-rehype-pretty-code-fragment] code[data-theme='light'],
   html[class^='dark'] span[data-rehype-pretty-code-fragment] code[data-theme='light'],
    html[class^='dark'] div[data-rehype-pretty-code-fragment] div[data-theme='light']`,
  {
    display: 'none',
  }
);

globalStyle(
  `html[class^='light'] div[data-rehype-pretty-code-fragment] pre[data-theme='dark'],
   html[class^='light'] div[data-rehype-pretty-code-fragment] code[data-theme='dark'],
   html[class^='light'] span[data-rehype-pretty-code-fragment] code[data-theme='dark'],
    html[class^='light'] div[data-rehype-pretty-code-fragment] div[data-theme='dark']`,
  {
    display: 'none',
  }
);

globalStyle(`code`, {
  counterReset: 'line',
});

globalStyle(`code > [data-line]::before`, {
  color: 'rgb(128, 128, 128)',
  content: 'counter(line)',
  counterIncrement: 'line',
  display: 'inline-block',
  marginRight: '2rem',
  textAlign: 'right',
  width: '1rem',
});

globalStyle(`code[data-line-numbers-max-digits='2'] > [data-line]::before`, {
  width: '2rem',
});

globalStyle(`span[data-highlighted-line]`, {
  background: vars.color.lineHighlight,
});

globalStyle(`span[data-highlighted-chars]`, {
  backgroundColor: vars.color.wordHighlight,
});

globalStyle(`code:not(div[data-rehype-pretty-code-fragment] code)`, {
  background: `rgba(148,163,184,.25)`,
  borderRadius: vars.borderRadius.base,
  padding: '0.25rem 0.5rem',
});

globalStyle(`code[data-line-numbers-max-digits='3'] > [data-line]::before`, {
  width: '3rem',
});

globalStyle(`[data-rehype-pretty-code-fragment] pre`, {
  borderRadius: vars.borderRadius.base,
  padding: vars.space[2],
});

globalStyle(`div[data-rehype-pretty-code-fragment] div[data-rehype-pretty-code-title]`, {
  paddingLeft: vars.space['5'],
  paddingRight: vars.space['5'],
  paddingTop: vars.space['3'],
  paddingBottom: vars.space['3'],
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.bold,
  backgroundColor: vars.color.bg,
  borderWidth: '1px',
  borderStyle: 'solid',
  borderBottom: 0,
  borderColor: vars.color.borderColor,
  borderTopLeftRadius: vars.borderRadius.base,
  borderTopRightRadius: vars.borderRadius.base,
});

globalStyle(`div[data-rehype-pretty-code-fragment] div[data-rehype-pretty-code-title] + pre`, {
  marginTop: 0,
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: vars.color.borderColor,
});
