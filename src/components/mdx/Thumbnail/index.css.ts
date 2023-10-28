import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/themes/contract.css';

export const ThumbnailStyle = style({
  overflow: 'hidden',
  borderRadius: vars.borderRadius.lg,
});
