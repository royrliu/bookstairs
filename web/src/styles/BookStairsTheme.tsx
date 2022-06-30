import React from 'react';

import {
  ColorSchemeProvider,
  createEmotionCache,
  MantineProvider,
  MantineProviderProps,
} from '@mantine/core';
import { useColorScheme, useHotkeys, useLocalStorage } from '@mantine/hooks';
import { ColorScheme } from '@mantine/styles/lib/theme/types/ColorScheme';
import { MantineThemeOverride } from '@mantine/styles/lib/theme/types/MantineTheme';
import { currentLanguage, defaultLanguage } from 'locales';

// The basic fonts for main chinese and english users.
// We could add new fonts like "明体" in japanese.
// TODO Change the fonts based on the os system and locales.
const bookstairsFonts = [
  '-apple-system',
  'Segoe UI',
  'SegoeUI',
  'Microsoft YaHei',
  '微软雅黑',
  'Roboto',
  'Helvetica Neue',
  'Helvetica',
  'Arial',
  'sans-serif',
  'Apple Color Emoji',
  'Segoe UI Emoji',
];

// The monospace for code, kbd and prism based fonts.
const bookstairsMonoFonts = [
  'ui-monospace',
  'SFMono-Regular',
  'Menlo',
  'Monaco',
  'Consolas',
  'Liberation Mono',
  'Courier New',
  'monospace',
];

// Default theme for bookstairs.
const bookstairsTheme: MantineThemeOverride = {
  colorScheme: 'light',
  focusRing: 'auto',
  respectReducedMotion: true,
  cursorType: 'pointer',
  primaryColor: 'blue',
  fontFamily: bookstairsFonts,
  transitionTimingFunction: 'ease',
  fontFamilyMonospace: bookstairsMonoFonts,
  // We won't support rtl now. It's too complex to support.
  dir: 'ltr',
  loader: 'oval',
  // day.js named all the locales in lower case.
  datesLocale: defaultLanguage.toLowerCase(),
  headings: { fontFamily: bookstairsFonts },
};

const bookstairsThemeCache = createEmotionCache({ key: 'bookstairs' });

// Override the mantine based theme, defined it as bookstairs theme provider.
export function BookStairsTheme({ children }: MantineProviderProps) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'bookstairs-color-scheme',
    // Use default user system based color scheme setting.
    defaultValue: useColorScheme(),
    getInitialValueInEffect: true,
  });
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  // Add hotkeys for toggle color scheme.
  useHotkeys([['mod+J', () => toggleColorScheme()]]);
  const datesLocale = currentLanguage().toLowerCase();

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ ...bookstairsTheme, colorScheme, datesLocale }}
        emotionCache={bookstairsThemeCache}
      >
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
