import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest/presets/default-esm',
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {
    // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useEsm: true,
        isolatedModules: true,

      },
    ],
  },
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  verbose: false,
  testTimeout: 200,
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/built/'],
  modulePathIgnorePatterns: ['<rootDir>/built/'],

  reporters: process.env['GITHUB_ACTIONS']
    ? [['github-actions', { silent: false }], 'summary']
    : ['default'],

  restoreMocks: true,
  clearMocks: true,
  resetMocks: true,
}

export default config