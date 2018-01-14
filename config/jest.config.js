module.exports = {
  rootDir: "../",
  setupFiles: [
    "<rootDir>/config/setup.js"
  ],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  testMatch: [
    "**/*.(test|spec).(ts|tsx)"
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    "**/src/**/*.(ts|tsx)",
    "!**/src/App.tsx",
    "!**/src/index.tsx",
    "!**/src/store/**",
    "!**/src/**/index.ts"
  ],
  coverageReporters: [
    "text",
    "lcovonly",
    "html"
  ],
  coverageDirectory: "<rootDir>/coverage"
}
