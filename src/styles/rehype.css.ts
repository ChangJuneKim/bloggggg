import { globalStyle } from '@vanilla-extract/css';
import { vars } from '@/styles/themes/contract.css';
import { darkThemeClass } from '@/styles/themes/dark.css';
import { lightThemeClass } from '@/styles/themes/light.css';

globalStyle(`div[data-rehype-pretty-code-fragment]`, {
  marginTop: vars.space[5],
  marginBottom: vars.space[5],
});

globalStyle(
  `${darkThemeClass} div[data-rehype-pretty-code-fragment] pre[data-theme='light'],
   ${darkThemeClass} div[data-rehype-pretty-code-fragment] code[data-theme='light'],
   ${darkThemeClass} span[data-rehype-pretty-code-fragment] code[data-theme='light'],
    ${darkThemeClass} div[data-rehype-pretty-code-fragment] div[data-theme='light']`,
  {
    display: 'none',
  }
);

globalStyle(
  `${lightThemeClass} div[data-rehype-pretty-code-fragment] pre[data-theme='dark'],
   ${lightThemeClass} div[data-rehype-pretty-code-fragment] code[data-theme='dark'],
   ${lightThemeClass} span[data-rehype-pretty-code-fragment] code[data-theme='dark'],
    ${lightThemeClass} div[data-rehype-pretty-code-fragment] div[data-theme='dark']`,
  {
    display: 'none',
  }
);

// globalStyle(`code`, {
//   counterReset: 'line',
// });
//
// globalStyle(`code > [data-line]::before`, {
//   color: 'rgb(128, 128, 128)',
//   content: 'counter(line)',
//   counterIncrement: 'line',
//   display: 'inline-block',
//   marginRight: '2rem',
//   textAlign: 'right',
//   width: '1rem',
// });

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
  padding: '0.1rem 0.25rem',
});

globalStyle(`code[data-line-numbers-max-digits='3'] > [data-line]::before`, {
  width: '3rem',
});

globalStyle(`[data-rehype-pretty-code-fragment] pre`, {
  borderRadius: vars.borderRadius.base,
  padding: vars.space[2],
  overflow: 'auto',
  scrollbarWidth: 'none',
});

globalStyle(`pre::-webkit-scrollbar`, {
  width: vars.space['1'],
  height: vars.space['1'],
});

globalStyle(`[data-rehype-pretty-code-fragment] pre::-webkit-scrollbar-track`, {
  background: vars.color.borderColor,
});

globalStyle(`[data-rehype-pretty-code-fragment] pre::-webkit-scrollbar-thumb`, {
  background: vars.color.primary,
});

globalStyle(`[data-rehype-pretty-code-fragment] pre::-webkit-scrollbar:hover`, {
  background: vars.color.primaryHover,
});

globalStyle(`div[data-rehype-pretty-code-fragment] div[data-rehype-pretty-code-title]`, {
  paddingLeft: vars.space['5'],
  paddingRight: vars.space['5'],
  paddingTop: vars.space['3'],
  paddingBottom: vars.space['1'],
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.bold,
  backgroundColor: vars.color.codeHeader,
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
