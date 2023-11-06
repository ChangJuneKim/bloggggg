import { globalStyle, style } from '@vanilla-extract/css';
import { zIndices } from '@/styles/tokens/z-indices';
import { vars } from '@/styles/themes/contract.css';
import { shadows } from '@/styles/tokens/shadows';
import { pseudoSelectors } from '@/styles/selectors';

export const categoryDropdownStyle = style({
  position: 'relative',
  display: 'inline-block',
  flexBasis: '50%',
});

export const categoryDropdownButton = style({
  selectors: {
    [pseudoSelectors.hover]: {
      borderColor: vars.color.primary,
      transition: 'border 0.3s ease',
    },
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  textAlign: 'left',
  border: `2px solid ${vars.color.borderColor}`,
  transition: 'border 0.3s ease',
  padding: '6px 12px',
  borderRadius: vars.borderRadius.md,
  width: '100%',
});

export const activeDropdownBorder = style({
  borderColor: vars.color.primary,
  transition: 'border 0.3s ease',
});

export const categoryDropdownContent = style({
  position: 'absolute',
  background: vars.color.bg,
  width: '100%',
  boxShadow: shadows.md,
  borderRadius: vars.borderRadius.md,
  zIndex: zIndices.docked,
});

// 드롭다운이 열렸을 때 적용할 스타일

export const categoryDropdownItem = style({});
export const categoryDropdownIcon = style({
  transition: 'transform 0.3s ease',
});
export const categoryDropdownIconRotated = style({
  transform: 'rotate(180deg)',
  transition: 'transform 0.3s ease',
});

globalStyle(`${categoryDropdownContent} ${categoryDropdownItem}`, {
  color: vars.color.text,
  padding: '12px 16px',
  textDecoration: 'none',
  display: 'block',
});

globalStyle(`${categoryDropdownContent} ${categoryDropdownItem}:hover`, {
  background: vars.color.bgHover,
});
