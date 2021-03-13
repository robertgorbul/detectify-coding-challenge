export type ThemeTypeface = {
  typefaces: string[];
  className: string;
};

export type ThemeFonts = {
  base: ThemeTypeface;
  code: ThemeTypeface;
};

export interface Theme {
  fonts: ThemeFonts;
}

export const theme: Theme = {
  fonts: {
    base: {
      typefaces: ['Inter Variable'],
      className: 'fonts-loaded-base',
    },
    code: {
      typefaces: ['JetBrains Mono Variable'],
      className: 'fonts-loaded-code',
    },
  },
};
