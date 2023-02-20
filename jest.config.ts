export default {
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.spec.json',
    },
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.svg': '<rootDir>/__mocks__/svgrMock.tsx',
  },
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.stories.{ts,tsx}',
    '!src/**/*.test.{ts,tsx}',
    '!src/**/index.ts',
    '!src/**/index.tsx',
    '!src/**/types.ts',
    '!src/**/types.tsx',
    '!src/**/mock.ts',
    '!src/**/mock.tsx',
    '!src/**/stories.tsx',
    '!src/**/stories.ts',
    '!src/**/stories.mdx',
  ],
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
}
