import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/styles/themes/contract.css';
import { transition } from '@/styles/tokens/motion';
import { calc } from '@vanilla-extract/css-utils';

export const mdxSection = style({});

globalStyle(`${mdxSection} p`, {
  textIndent: vars.space['3'],
});

globalStyle(
  `${mdxSection} h1, ${mdxSection} h2, ${mdxSection} h3, ${mdxSection} h4, ${mdxSection} h5, ${mdxSection} h6, ${mdxSection}p`,
  {
    marginTop: vars.space['8'],
  }
);

globalStyle(`${mdxSection} a`, {
  textDecoration: 'underline dashed',
  textUnderlineOffset: '0.25rem',
  transitionDuration: transition.duration['ultra-slow'],
});

globalStyle(`${mdxSection} a:hover`, {
  color: vars.color.primaryHover,
  transitionDuration: transition.duration['ultra-slow'],
});

export const postsSection = style({
  minHeight: calc.subtract('100vh', vars.space.navigationHeight, '250px'),
});

// globalStyle(`${postsSection} h4,${postsSection} p`, {
//   margin: 0,
// });

globalStyle(`${postsSection} li`, {
  listStyle: 'none',
});
