import { globalStyle } from '@vanilla-extract/css';
import { vars } from '@/styles/themes/contract.css';

globalStyle(
  `html[class^='dark'] pre[data-theme='light'], html[class^='dark'] code[data-theme='light']`,
  {
    display: 'none',
  }
);

globalStyle(
  `html[class^='light'] pre[data-theme='dark'], html[class^='light'] code[data-theme='dark']`,
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

// TODO: 색상 변경할 것
globalStyle(`span[data-highlighted-line]`, {
  backgroundColor: vars.color.textEmphasized,
  borderLeft: '2px solid #fff',
});

globalStyle(`span[data-highlighted-chars]`, {
  backgroundColor: vars.color.primary,
});

globalStyle(`code[data-line-numbers-max-digits='3'] > [data-line]::before`, {
  width: '3rem',
});

globalStyle(`[data-rehype-pretty-code-fragment] pre`, {
  borderRadius: vars.borderRadius.base,
});
