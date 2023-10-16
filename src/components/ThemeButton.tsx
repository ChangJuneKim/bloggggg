'use client';
import { DEFAULT_THEME } from '@/constants/themes';
import { themeButton } from '@/components/ThemeButton.css';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const THEMES_ICONS_MAP: any = {
  [DEFAULT_THEME]: '시스템',
  light: '라이트',
  dark: '다크',
};

export default function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <button className={themeButton}></button>;
  }

  return (
    <button
      className={themeButton}
      onClick={() =>
        setTheme(resolvedTheme === 'dark' || resolvedTheme === 'system' ? 'light' : 'dark')
      }
    >
      {THEMES_ICONS_MAP[resolvedTheme as string]}
    </button>
  );
}
