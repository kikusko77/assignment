/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // set route to the classes
  },
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
};