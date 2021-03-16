module.exports = {
  plugins: [
    'postcss-normalize',
    'postcss-import',
    '@tailwindcss/jit',
    [
      'postcss-preset-env',
      {
        stage: 2,
        features: {
          'nesting-rules': true,
          'prefers-color-scheme-query': true,
        },
      },
    ],
  ],
};
