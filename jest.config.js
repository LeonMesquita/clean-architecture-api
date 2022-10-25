/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

export default {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir/src/**/*.ts>'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
