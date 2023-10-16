// https://github.com/chakra-ui/chakra-ui/ 에서 수정하여 가져옴
// MIT License - Copyright (c) 2019 Segun Adebayo

export const pseudoSelectors = {
  /**
   * CSS 선택자 '&:hover'에 대한 스타일
   */
  hover: '&:hover, &[data-hover]',
  /**
   * CSS 선택자 '&:active'에 대한 스타일
   */
  active: '&:active, &[data-active]',
  /**
   * CSS 선택자 '&:focus'에 대한 스타일
   */
  focus: '&:focus, &[data-focus]',
  /**
   * 이 요소의 자식이 포커스를 받았을 때 적용되는 스타일
   * - CSS 선택자 '&:focus-within'
   */
  focusWithin: '&:focus-within',
  /**
   * 이 요소가 탭을 통해 포커스를 받았을 때 적용되는 스타일
   * - CSS 선택자 '&:focus-visible'
   */
  focusVisible: '&:focus-visible, &[data-focus-visible]',
  /**
   * 이 요소가 비활성화되었을 때 적용되는 스타일
   * - 다음 CSS 선택자들에 스타일이 적용됨:
   * - '&[aria-disabled=true]'
   * - '&:disabled'
   * - '&[data-disabled]'
   */
  disabled: '&[disabled], &[aria-disabled=true], &[data-disabled]',
  /**
   * CSS 선택자 '&:readonly'에 대한 스타일
   */
  readOnly: '&[aria-readonly=true], &[readonly], &[data-readonly]',
  /**
   * CSS 선택자 '&::before'에 대한 스타일
   */
  before: '&::before',
  /**
   * CSS 선택자 '&::after'에 대한 스타일
   */
  after: '&::after',
  /**
   * CSS 선택자 '&:empty'에 대한 스타일
   */
  empty: '&:empty',
  /**
   * ARIA 속성 'aria-selected'이 'true'일 때 적용되는 스타일
   * - CSS 선택자 '&[aria-selected=true]'
   */
  selected: '&[aria-selected=true], &[data-selected]',
  /**
   * CSS 선택자 '[hidden=true]'에 대한 스타일
   */
  hidden: '&[hidden], &[data-hidden]',
  /**
   * CSS 선택자 '&:nth-child(even)'에 대한 스타일
   */
  even: '&:nth-of-type(even)',
  /**
   * CSS 선택자 '&:nth-child(odd)'에 대한 스타일
   */
  odd: '&:nth-of-type(odd)',
  /**
   * CSS 선택자 '&:first-of-type'에 대한 스타일
   */
  first: '&:first-of-type',
  /**
   * CSS 선택자 '&:last-of-type'에 대한 스타일
   */
  last: '&:last-of-type',
  /**
   * CSS 선택자 '&:not(:first-of-type)'에 대한 스타일
   */
  notFirst: '&:not(:first-of-type)',
  /**
   * CSS 선택자 '&:not(:last-of-type)'에 대한 스타일
   */
  notLast: '&:not(:last-of-type)',
  /**
   * CSS 선택자 '&:visited'에 대한 스타일
   */
  visited: '&:visited',
  /**
   * CSS 선택자 '&::placeholder'에 대한 스타일
   */
  placeholder: '&::placeholder',
  /**
   * CSS 선택자 '@media (prefers-color-scheme: dark)'에 대한 스타일
   * 사용자가 시스템에 밝거나 어두운 색상 테마를 사용하도록 요청하였을 때 사용됩니다.
   */
  mediaDark: '@media (prefers-color-scheme: dark)',
  /**
   * CSS 선택자 '@media (prefers-reduced-motion: reduce)'에 대한 스타일
   * 사용자가 시스템에 애니메이션 양을 줄이도록 요청하였을 때 사용됩니다.
   */
  mediaReduceMotion: '@media (prefers-reduced-motion: reduce)',
};

export type Pseudos = typeof pseudoSelectors;

export const pseudoPropNames = Object.keys(pseudoSelectors) as Array<keyof typeof pseudoSelectors>;
