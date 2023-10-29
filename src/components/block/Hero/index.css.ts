import { globalStyle, keyframes, style } from '@vanilla-extract/css';
import { colorPalette } from '@/styles/tokens/colors';
import { vars } from '@/styles/themes/contract.css';
import { minMediaQuery } from '@/styles/tokens/breakpoints';

export const heroSection = style({
  position: 'relative',
  height: '55vh',
  overflow: 'hidden',
});

export const imageContainer = style({
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const zoomInAnimation = keyframes({
  '0%': { transform: 'scale(1)' },
  '100%': { transform: 'scale(1.1)' },
});

const fadeInOutAnimation = keyframes({
  '0%': { opacity: 0.3 },
  '100%': { opacity: 0.6 },
});

export const imageStyle = style({
  position: 'absolute',
  height: '100%',
  width: '100%',
  inset: 0,
  objectFit: 'cover',
  animation: `${zoomInAnimation} 1s cubic-bezier(0.645, 0.045, 0.355, 1) forwards`,
});

export const backdrop = style({
  position: 'absolute',
  inset: '0 0 0 0',
  background: '#000',
  animation: `${fadeInOutAnimation} 1.5s cubic-bezier(0.645, 0.045, 0.355, 1) forwards`,
});

export const welcome = style({
  position: 'absolute',
  inset: '20% 20% 0 20%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  color: colorPalette.blueGray['50'],
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',

  '@media': {
    [minMediaQuery('md')]: {
      inset: '20% 0 0 20%',
    },
  },
});

globalStyle(`${welcome} h1`, {
  fontSize: vars.fontSize['2xl'],
  fontWeight: vars.fontWeight.bold,
  marginBottom: vars.space['2'],

  '@media': {
    [minMediaQuery('md')]: {
      fontSize: vars.fontSize['3xl'],
      fontWeight: vars.fontWeight.bold,
      marginBottom: vars.space['2'],
    },
  },
});

globalStyle(`${welcome} p`, {
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.medium,

  '@media': {
    [minMediaQuery('md')]: {
      fontSize: vars.fontSize['lgx'],
    },
  },
});
