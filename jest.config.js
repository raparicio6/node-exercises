export default {
  testEnvironment: 'node',
  preset: 'ts-jest/presets/default-esm',
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.(m)?js$': '$1',
  },
  transform: {
    '^.+\\.(ts)?$': 'ts-jest',
    '^.+\\.(js)$': 'babel-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(m)?ts$',
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.ts', 'src/**/*.mts', '!src/**/*.d.ts', '!src/**/*.d.mts'],
};
