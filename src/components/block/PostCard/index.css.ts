import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/styles/themes/contract.css';
import { pseudoSelectors } from '@/styles/selectors';
import { calc } from '@vanilla-extract/css-utils';
import { leftToRightGradient } from '@/utils/color';

export const list = style({
  [pseudoSelectors.notFirst]: {
    marginTop: vars.space['4'],
    borderTop: '1px solid',
    borderColor: vars.color.borderColor,
  },
  padding: vars.space['3'],
});
export const link = style({});

globalStyle(`${link}:hover h3, ${link}:hover p`, {
  color: vars.color.primary,
});

export const article = style({
  selectors: {
    [pseudoSelectors.hover]: {
      transform: 'translateX(10px);',
    },
    [pseudoSelectors.before]: {
      content: '',
      display: 'block',
      position: 'absolute',
      width: vars.space['1'],
      height: vars.space.full,
      background: leftToRightGradient(vars.color.primary, vars.color.navigationBg),
      borderRadius: vars.borderRadius.base,
      opacity: 0,
      transform: 'translateX(0px)',
      left: calc.negate(vars.space['6']),
      transition: 'transform 0.5s ease 0s, opacity 0.5s ease 0s;',
    },
  },
  padding: vars.space['1'],
  position: 'relative',
  transition: 'transform 0.5s ease 0s, opacity 0.5s ease 0s;',
});

globalStyle(`${article}:hover:before`, {
  opacity: 1,
});

export const titleStyle = style({
  fontSize: vars.fontSize['2xl'],
  fontWeight: vars.fontWeight.medium,
});

export const descStyle = style({
  fontSize: vars.fontSize['lgx'],
  fontWeight: vars.fontWeight.normal,
});
