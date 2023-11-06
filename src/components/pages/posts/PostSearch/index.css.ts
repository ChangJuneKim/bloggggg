// 검색 입력 스타일
import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/themes/contract.css';

export const searchInputContainerStyle = style({
  display: 'flex',
  alignItems: 'center',
  background: vars.color.bg,
  borderRadius: vars.borderRadius.md,
  padding: '6px 12px',
  border: `2px solid ${vars.color.borderColor}`,
  transition: 'border-color 0.3s ease',
  selectors: {
    '&:hover': {
      borderColor: vars.color.primary,
    },
    '&:focus-within': {
      borderColor: vars.color.primary,
    },
  },
});

// SVGIcon 컴포넌트가 없는 경우 대체할 수 있는 임시 스타일
export const searchIconStyle = style({
  marginRight: vars.space['3'],
});

export const inputStyle = style({
  border: 'none',
  outline: 'none',
  width: '100%',
  background: 'transparent',
});
