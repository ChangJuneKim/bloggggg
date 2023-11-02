'use client';

import { DEFAULT_THEME } from '@/constants/themes';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { themeButton } from '@/components/layout/Header/ThemeButton/index.css';
import { Box, SVGIcon } from '@/components/base';
import { vars } from '@/styles/themes/contract.css';

const THEMES_ICONS_MAP: any = {
  [DEFAULT_THEME]: <SVGIcon id={'system'} />,
  light: <SVGIcon id={'sun'} width={'100%'} height={'100%'} />,
  dark: <SVGIcon id={'moon'} width={'100%'} height={'100%'} />,
};

export default function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button className={themeButton}>
        <Box as={'span'} width={'4'} height={'4'} aria-label={'theme button'}>
          <SVGIcon id={'system'} width={'100%'} height={'100%'} color={vars.color.primary} />
        </Box>
      </button>
    );
  }

  return (
    <button
      className={themeButton}
      onClick={() =>
        setTheme(resolvedTheme === 'dark' || resolvedTheme === 'system' ? 'light' : 'dark')
      }
    >
      <Box as={'span'} width={'4'} height={'4'}>
        {THEMES_ICONS_MAP[resolvedTheme as string]}
      </Box>
    </button>
  );
}
