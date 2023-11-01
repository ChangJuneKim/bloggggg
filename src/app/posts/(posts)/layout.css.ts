import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/styles/themes/contract.css';
import { transition } from '@/styles/tokens/motion';
import { calc } from '@vanilla-extract/css-utils';
import { headingStyle } from '@/components/mdx/Headings/index.css';
import { minMediaQuery } from '@/styles/tokens/breakpoints';

export const mdxSection = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
  gap: vars.space['8'],
  paddingTop: vars.space['24'],
  marginBottom: vars.space['24'],
  '@media': {
    [minMediaQuery('xl')]: {
      gridTemplateColumns: '3fr 800px 4fr', // 중앙에 800px 고정크기
      paddingLeft: vars.space['20'],
      paddingRight: vars.space['20'],
    },
  },
});

export const tagsAside = style({});

export const tagsAsideSticky = style({
  position: 'sticky',
  top: '10%',
  padding: vars.space['3'],
  borderRight: `2px solid ${vars.color.borderColor}`,
});

globalStyle(`${mdxSection} ${tagsAside} a`, {
  textDecoration: 'none',
});

globalStyle(`${mdxSection} ${tagsAside}`, {
  '@media': {
    [minMediaQuery('xl')]: {
      gridColumn: '1',
      display: 'block',
    },
  },
});

globalStyle(`${mdxSection} article`, {
  gridColumn: '1', // 기본적으로 전체 너비
  '@media': {
    [minMediaQuery('xl')]: {
      gridColumn: '2', // 중앙에 위치
    },
  },
});

globalStyle(`${mdxSection} article > div:first-of-type`, {
  margin: 0,
});

globalStyle(`${mdxSection} article > *`, {
  marginBottom: vars.space['3'],
});

globalStyle(`${mdxSection} ul`, {
  listStylePosition: 'inside',
});

globalStyle(`${mdxSection} aside`, {
  display: 'none',
  '@media': {
    [minMediaQuery('xl')]: {
      gridColumn: '3',
      display: 'block',
    },
  },
});

globalStyle(`${mdxSection} ol`, {
  marginLeft: vars.space['6'],
  marginBottom: vars.space['3'],
});

globalStyle(`${mdxSection} li`, {
  marginBottom: vars.space['1'],
});

globalStyle(`${mdxSection} *:not(${headingStyle} a)`, {
  lineHeight: 1.7,
});

globalStyle(`${mdxSection} p`, {
  textIndent: vars.space['3'],
});

globalStyle(
  `${mdxSection} h1, ${mdxSection} h2, ${mdxSection} h3, ${mdxSection} h4, ${mdxSection} h5, ${mdxSection} h6, ${mdxSection}p`,
  {
    marginTop: vars.space['8'],
    scrollMarginTop: '70px',
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

globalStyle(`${postsSection} h3`, {
  fontSize: vars.fontSize['2xl'],
  fontWeight: vars.fontWeight.bold,
  marginBottom: vars.space['8'],
});

globalStyle(`${postsSection} li`, {
  listStyle: 'none',
});

// globalStyle(`${mdxSection} article`, {
//   maxWidth: '1200px',
// });
