import { globalStyle, keyframes, style } from '@vanilla-extract/css';
import { colorPalette } from '@/styles/tokens/colors';
import { vars } from '@/styles/themes/contract.css';

export const heroSection = style({
  position: 'relative',
  height: '60vh',
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
  '100%': { transform: 'scale(1.15)' },
});

const fadeInOutAnimation = keyframes({
  '0%': { opacity: 0.5 },
  '100%': { opacity: 0.7 },
});

export const imageStyle = style({
  position: 'absolute',
  height: '100%',
  width: '100%',
  inset: 0,
  objectFit: 'cover',
  animation: `${zoomInAnimation} 1.5s cubic-bezier(0.645, 0.045, 0.355, 1) forwards`,
});

export const backdrop = style({
  position: 'absolute',
  inset: '0 0 0 0',
  background: '#000',
  animation: `${fadeInOutAnimation} 1.5s cubic-bezier(0.645, 0.045, 0.355, 1) forwards`,
});

export const welcome = style({
  position: 'absolute',
  inset: '20% 0 0 20%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  color: colorPalette.blueGray['50'],
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
});

globalStyle(`${welcome} h1`, {
  fontSize: vars.fontSize['3xl'],
  fontWeight: vars.fontWeight.bold,
  marginBottom: vars.space['2'],
});

globalStyle(`${welcome} p`, {
  fontWeight: vars.fontWeight.medium,
});
