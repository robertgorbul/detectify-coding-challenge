module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    amd: true,
    es2021: true,
    browser: true,
    node: true,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      'babel-module': {},
      'typescript': {
        alwaysTryTypes: false,
      },
    },
  },
  extends: [
    'airbnb-typescript',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint', 'module-resolver'],
  rules: {
    'quotes': 0,
    'no-console': [2, { allow: ['warn', 'error'] }],
    'import/extensions': [2, 'never'],
    'import/prefer-default-export': 0,
    'import/no-default-export': 2,
    'module-resolver/use-alias': 1,
    'react/jsx-filename-extension': [2, { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-curly-brace-presence': 2,
    'react/jsx-uses-react': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    'jsx-a11y/no-autofocus': 1,
    '@typescript-eslint/quotes': [2, 'single', { allowTemplateLiterals: true }],
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 0,
      },
    },
    {
      files: ['./pages/**/*.tsx', './src/pages/**/*.tsx', '*.d.ts'],
      rules: {
        'import/no-default-export': 0,
      },
    },
  ],
};
