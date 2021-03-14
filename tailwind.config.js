module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './pages/**/!(*.d).{js,jsx,ts,tsx}',
      './src/**/!(*.d).{js,jsx,ts,tsx}',
    ],
    options: {
      keyframes: true,
    },
  },
  theme: {
    extend: {
      colors: {
        base03: '#002b36',
        base02: '#073642',
        base01: '#586e75',
        base00: '#657b83',
        base0: '#839496',
        base1: '#93a1a1',
        base2: '#eee8d5',
        base3: '#fdf6e3',
        yellow: '#b58900',
        orange: '#cb4b16',
        red: '#dc322f',
        magenta: '#d33682',
        violet: '#6c71c4',
        blue: '#268bd2',
        cyan: '#2aa198',
        green: '#859900',
        light: '#f0f0f0',
        dark: '#333',
      },
      fontFamily: {
        text: ['"Inter Variable"', 'sans-serif'],
        code: ['"JetBrains Mono Variable"', 'monospace'],
      },
      fontSize: {
        root: {
          base: '100%',
          xxl: '112.5%',
        },
      },
      lineHeight: {
        baseline: {
          base: 1.4,
          xxl: 1.8,
        },
      },
      maxWidth: {
        text: '35em',
        content: '60rem',
      },
      maxHeight: {
        '1/2screen': '50vh',
      },
      minHeight: {
        note: '50vh',
        search: '35vh',
      },
      transitionProperty: {
        colors: 'color, background-color',
      },
      screens: {
        sm: '40em',
        md: '48em',
        lg: '64em',
        xl: '80em',
        xxl: '90em',
        xxxl: '160em',
      },
    },
  },
  variants: {
    transitionProperty: ['hover', 'focus'],
  },
  darkMode: 'media',
  corePlugins: {
    preflight: false,
  },
};
