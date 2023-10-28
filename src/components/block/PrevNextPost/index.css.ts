import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/styles/themes/contract.css';
import { minMediaQuery } from '@/styles/tokens/breakpoints';

export const prevNextFlex = style({
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0',

  '@media': {
    [minMediaQuery('xl')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: vars.space['8'],
    },
    [minMediaQuery('2xl')]: {
      paddingLeft: vars.space['44'],
      paddingRight: vars.space['44'],
    },
  },
});

globalStyle(`${prevNextFlex} > a`, {
  marginBottom: vars.space['8'],
});

export const contentContainer = style({
  maxWidth: 'revert',
  minWidth: 'revert',
  '@media': {
    [minMediaQuery('sm')]: {
      maxWidth: '360px',
      minWidth: '360px',
    },
  },
});

globalStyle(`${contentContainer} h4`, {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

globalStyle(`${contentContainer} p`, {
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
});

export const prevPostStyle = style({
  marginRight: 'auto',
  marginLeft: 'auto',
  '@media': {
    [minMediaQuery('xl')]: {
      marginLeft: 'revert',
      marginRight: 'auto',
    },
  },
});

export const nextPostStyle = style({
  marginLeft: 'auto',
  marginRight: 'auto',
  '@media': {
    [minMediaQuery('xl')]: {
      marginLeft: 'auto',
      marginRight: 'revert',
    },
  },
});
