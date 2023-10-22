// CSS 변수를 생성하기 위한 함수를 임포트합니다.
import { createVar, style } from '@vanilla-extract/css';
import { THEMES } from '@/constants/themes';
import { CSSProperties } from 'react';
import { Properties } from 'csstype';
import { CSSVarFunction } from '@vanilla-extract/private';
import { em, rem } from '@/utils/css';
import { vars } from '@/styles/themes/contract.css';
import { darkThemeClass } from '@/styles/themes/dark.css';
import { themesSelectors } from '@/styles/atoms.css';
import { colorPalette } from '@/styles/tokens/colors';

const isObject = (value: unknown) =>
  !!(value && typeof value === `object` && !Array.isArray(value));

const isString = (value: unknown) => typeof value === `string`;

type CSSTypeProperties = Properties<number | (string & Record<string, unknown>)>;

type CSSPropertiesWithModes<Modes extends string> = {
  [Property in keyof CSSTypeProperties]:
    | CSSTypeProperties[Property]
    | CSSVarFunction
    | Array<CSSVarFunction | CSSTypeProperties[Property]>
    | Record<
        Modes,
        | CSSTypeProperties[Property]
        | CSSVarFunction
        | Array<CSSVarFunction | CSSTypeProperties[Property]>
      >;
};

type CSSPropertiesWithVars = CSSProperties & {
  vars?: {
    [key: string]: string;
  };
};

// 어떤 테마가 사용되는지에 따라 스타일을 적용하는 타입을 정의합니다.
type SelectorMap<Modes extends string = typeof THEMES[number]> = {
  [selector: string]: CSSProperties | CSSPropertiesWithModes<Modes>;
};

interface IThemeAwareStylesProps {
  selectorMap: SelectorMap;
  defaultTheme: typeof THEMES[number];
  alternateThemeClass: string;
  rootClass?: string;
}

// 테마에 따라 다른 스타일을 적용하는 함수를 정의합니다.
const themeAwareStyles = ({
  selectorMap,
  defaultTheme,
  alternateThemeClass,
  rootClass = ``,
}: IThemeAwareStylesProps) => {
  // 최종적으로 적용할 스타일을 저장할 객체를 생성합니다.
  const selectors: Record<string, CSSPropertiesWithVars> = {};
  const r = rootClass ? `${rootClass} ` : ``;
  const alternate = defaultTheme === `light` ? THEMES[1] : THEMES[0];

  // selectorMap에 정의된 모든 선택자와 스타일을 반복하여 처리합니다.
  Object.entries(selectorMap).forEach(([selector, selectorStyle]) => {
    // 각 스타일 속성에 대해 처리합니다.
    Object.entries(selectorStyle).forEach(([property, cssOrObject]) => {
      if (isObject(cssOrObject)) {
        // 스타일 값이 객체인 경우, 테마에 따라 다른 값을 적용합니다.
        selectors[`${r}${selector}`] = {
          ...selectors[`${r}${selector}`],
          [property]: cssOrObject[defaultTheme],
        };
        selectors[`html.${alternateThemeClass} ${r}${selector}`] = {
          ...selectors[`html.${alternateThemeClass} ${r}${selector}`],
          [property]: cssOrObject[alternate],
        };
      } else if (isString(cssOrObject)) {
        // 스타일 값이 문자열인 경우, 그대로 적용합니다.
        selectors[`${r}${selector}`] = {
          ...selectors[`${r}${selector}`],
          [property]: cssOrObject,
        };
      }
    });
  });

  // 계산된 스타일을 반환합니다.
  return selectors;
};

const displayOpacityVar = createVar();
const boxShadowOpacityVar = createVar();

// 배지에 적용할 스타일을 정의하는 객체를 생성합니다.
const badgeStyles: SelectorMap = {
  // 각 프로그래밍 언어에 따라 배경색과 텍스트 색상을 설정합니다.
  "&[data-lang='js']": {
    background: `rgba(247, 223, 30, ${displayOpacityVar})`,
    color: { light: `black`, dark: `rgb(247, 223, 30)` },
  },
  "&[data-lang='javascript']": {
    background: `rgba(247, 223, 30, ${displayOpacityVar})`,
    color: { light: `black`, dark: `rgb(247, 223, 30)` },
  },
  "&[data-lang='jsx']": {
    background: `rgba(97, 218, 251, ${displayOpacityVar})`,
    color: { light: `${colorPalette.blueGray[800]}`, dark: `rgb(127, 222, 253)` },
  },
  "&[data-lang='ts']": {
    background: `rgba(97, 218, 251, ${displayOpacityVar})`,
    color: { light: `${colorPalette.blueGray[800]}`, dark: `rgb(127, 222, 253)` },
  },
  "&[data-lang='typescript']": {
    background: `rgba(97, 218, 251, ${displayOpacityVar})`,
    color: { light: `${colorPalette.blueGray[800]}`, dark: `rgb(127, 222, 253)` },
  },
  "&[data-lang='tsx']": {
    background: `rgba(97, 218, 251, ${displayOpacityVar})`,
    color: { light: `${colorPalette.blueGray[800]}`, dark: `rgb(127, 222, 253)` },
  },
  "&[data-lang='html']": {
    background: `rgba(0, 90, 156, ${displayOpacityVar})`,
    color: { light: `white`, dark: `rgb(114, 192, 253)` },
  },
  "&[data-lang='xml']": {
    background: `rgba(0, 90, 156, ${displayOpacityVar})`,
    color: { light: `white`, dark: `rgb(114, 192, 253)` },
  },
  "&[data-lang='svg']": {
    background: `rgba(0, 90, 156, ${displayOpacityVar})`,
    color: { light: `white`, dark: `rgb(114, 192, 253)` },
  },
  "&[data-lang='graphql']": {
    background: `rgba(225, 0, 152, ${displayOpacityVar})`,
    color: { light: `white`, dark: `rgb(255, 82, 181)` },
  },
  "&[data-lang='css']": {
    background: `rgba(255, 152, 0, ${displayOpacityVar})`,
    color: { light: `white`, dark: `rgb(255, 165, 48)` },
  },
  "&[data-lang='mdx']": {
    background: `rgba(249, 172, 0, ${displayOpacityVar})`,
    color: { light: `white`, dark: `rgb(255, 165, 48)` },
  },
  "&[data-lang='py']": {
    background: `rgba(51, 111, 160, ${displayOpacityVar})`,
    color: `rgb(255, 229, 194)`,
  },
  "&[data-lang='text']": {
    background: { light: `white`, dark: `rgba(255, 255, 255, ${displayOpacityVar})` },
  },
  "&[data-lang='sh']": {
    background: { light: `white`, dark: `rgba(255, 255, 255, ${displayOpacityVar})` },
  },
  "&[data-lang='shell']": {
    background: { light: `white`, dark: `rgba(255, 255, 255, ${displayOpacityVar})` },
  },
  "&[data-lang='yaml']": {
    background: `rgba(255, 168, 223, ${displayOpacityVar})`,
    color: { light: `${colorPalette.blueGray[800]}`, dark: `rgb(255, 168, 223)` },
  },
  "&[data-lang='md']": {
    background: { light: `white`, dark: `rgba(255, 255, 255, ${displayOpacityVar})` },
  },
  "&[data-lang='json']": {
    background: `rgba(250, 240, 230, ${displayOpacityVar})`,
    color: { light: `${colorPalette.blueGray[800]}`, dark: `rgb(250, 240, 230)` },
  },
  "&[data-lang='diff']": {
    background: `rgba(230, 255, 237, ${displayOpacityVar})`,
    color: { light: `${colorPalette.blueGray[800]}`, dark: `rgb(230, 255, 237)` },
  },
  "&[data-lang='svelte']": {
    background: { light: `rgb(255, 62, 0)`, dark: `rgba(255, 62, 0, ${displayOpacityVar})` },
    color: { light: `white`, dark: `rgb(255, 221, 211)` },
  },
};

// 배지에 적용할 기본 스타일을 정의합니다.
export const languageDisplayStyle = style({
  borderRadius: rem(6),
  paddingRight: em(6, 14),
  paddingLeft: em(6, 14),
  fontWeight: vars.fontWeight.medium,
  letterSpacing: vars.letterSpacing.wide,
  boxShadow: `inset 0 1px 4px 0 rgba(0, 0, 0, ${boxShadowOpacityVar}), inset 0 1px 0px 0px rgba(0, 0, 0, ${boxShadowOpacityVar}), inset 0 -1px 0px 0px rgba(255, 255, 255, ${boxShadowOpacityVar})`,
  vars: {
    // CSS 변수에 값을 설정합니다.
    [displayOpacityVar]: `0.75`,
    [boxShadowOpacityVar]: `0.1`,
  },
  selectors: {
    // 어두운 테마에서는 배지의 투명도를 조절합니다.
    [themesSelectors.dark]: {
      vars: {
        [displayOpacityVar]: `0.25`,
      },
    },
    // themeAwareStyles 함수를 사용하여 언어에 따른 스타일을 적용합니다.
    ...themeAwareStyles({
      selectorMap: badgeStyles,
      defaultTheme: `light`,
      alternateThemeClass: darkThemeClass,
    }),
  },
});
