// https://github.com/chakra-ui/chakra-ui/blob/ff0dfb2b735a047c7a811f65b20fb81fa3db6f4a/packages/theme-tools/src/color.ts 에서 수정됨

import { TinyColor } from '@ctrl/tinycolor';
import { memoizedGet as get } from './get';

type Dict<T = unknown> = Record<string, T>;

/**
 * colorPalette에서 색상의 원시값을 가져옵니다.
 * @param colorPalette - colorPalette 객체
 * @param color - 색상 경로 ('green.200')
 * @param fallback - 대체 색상
 * @example get(colorPalette, 'green.200', 'green')
 */
export const getColor = (colorPalette: Dict, color: string, fallback?: string) => {
  const hex = get(colorPalette, color, color);
  const { isValid } = new TinyColor(hex);
  return isValid ? hex : fallback;
};

/**
 * colorPalette와 점 표기법을 사용하여 색상을 투명하게 만듭니다.
 * @param color - hex, rgb, 또는 hsl의 색상
 * @param opacity - 색상이 가져야 할 투명도 (0-1)
 * @example transparentizeDict('green.200', 0.5)(colorPalette)
 */
export const transparentizeDict = (color: string, opacity: number) => (colorPalette: Dict) => {
  const raw = getColor(colorPalette, color);
  return new TinyColor(raw).setAlpha(opacity).toRgbString();
};

/**
 * 색상을 투명하게 만듭니다.
 * @param color - hex, rgb, 또는 hsl의 색상
 * @param opacity - 색상이 가져야 할 투명도 (0-1)
 * @example transparentizeDict('#fff', 0.5)
 */
export const transparentize = (color: string, opacity: number) =>
  new TinyColor(color).setAlpha(opacity).toRgbString();

export const topToBottomGradient = (bottomColor: string, topColor: string) =>
  `linear-gradient(to top, ${bottomColor} 0%, ${topColor} 100%)`;
