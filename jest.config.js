const ignorePatterns = ['node_modules', '<rootDir>/.next/', '<rootDir>/out/'];

module.export = {
  roots: ['<rootDir>'],
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
    '!./src/assets/**',
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
  preset: 'ts-jest',
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>$1',
    '^~config(.*)$': '<rootDir>/src/config$1',
    '^~types(.*)$': '<rootDir>/src/types$1',
    '^~theme(.*)$': '<rootDir>/src/theme$1',
    '^~hooks(.*)$': '<rootDir>/src/hooks$1',
    '^~components(.*)$': '<rootDir>/src/components$1',
  },
};
