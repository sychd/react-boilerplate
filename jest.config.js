/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/file-mock.ts',
    '\\.(css|scss)$': '<rootDir>/src/__mocks__/file-mock.ts',
    '^src(.*)$': '<rootDir>/src$1',
  },
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/index.ts',
    '!**/node_modules/**',
  ],
  coverageReporters: ['json', 'html'],
};
