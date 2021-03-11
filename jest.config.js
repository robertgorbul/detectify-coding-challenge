const ignorePatterns = ['node_modules', '<rootDir>/.next/', '<rootDir>/out/'];

module.export = {
  setupFilesAfterEnv: ['./config/jest.setup.ts'],
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
  coveragePathIgnorePatterns: ignorePatterns,
  testPathIgnorePatterns: ignorePatterns,
  collectCoverageFrom: [
    './**/*.{ts,tsx,js}',
    '!./**/*.{d.ts}',
    '!./**/*types.ts',
    '!./**/*.config.*',
    '!./.eslintrc.js',
    '!./coverage/**',
    '!./config/*',
    '!./pages/**',
    '!./src/pages/**',
    '!./src/theme/**',
  ],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
  moduleNameMapper: {
    '~(.*)$': '<rootDir>/$1',
  },
};
