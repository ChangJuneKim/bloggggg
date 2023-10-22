/**
 * 숫자를 반올림합니다.
 * @param num 반올림할 숫자
 * @returns 7자리 소수점으로 반올림된 문자열
 */
export const round = (num: number) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, `$1`)
    .replace(/\.0$/, ``);

/**
 * 픽셀 값을 16px을 기준으로 하는 rem 단위로 변환합니다.
 * @param px 픽셀 값
 * @returns 반올림된 16px 기준 rem 값
 * @example rem(16) => 1rem
 */
export const rem = (px: number) => `${round(px / 16)}rem`;

/**
 * px와 base를 받아서 em 단위로 변환합니다.
 * @param px 픽셀 값
 * @param base 기준 크기
 * @returns 반올림된 px/base em 값
 * @example em(12, 12) => 1em
 */
export const em = (px: number, base: number) => `${round(px / base)}em`;
