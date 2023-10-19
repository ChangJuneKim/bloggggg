'use client';

import { lightThemeClass } from '@/styles/themes/light.css';
import { darkThemeClass } from '@/styles/themes/dark.css';
import { DEFAULT_THEME, STORAGE_KEY } from '@/constants/themes';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
export default function Providers({ children }: Props) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme={DEFAULT_THEME}
      storageKey={STORAGE_KEY}
      disableTransitionOnChange
      value={{
        light: lightThemeClass,
        dark: darkThemeClass,
      }}
    >
      {children}
    </ThemeProvider>
  );
}
