/**
 * @type {import("@jest/types").Config.ProjectConfig}
 */
module.exports = {
  testTimeout: 30 * 3000, // 30s
  transform: {
    ".(ts|tsx)": "ts-jest"
  },
  globalSetup: "./test/setup.ts",
  setupFiles: ["./test/setupFile.ts"],
  collectCoverageFrom: ["src/**/*.ts", "src/*.ts", "!**/node_modules/**"],
  coveragePathIgnorePatterns: ["node_modules/"],
  testEnvironment: "node",
  testRegex: "/test/.*\\.test\\.ts$",
  moduleFileExtensions: ["ts", "js", "json"],
  detectOpenHandles: true,
  reporters: ["default", ["jest-summary-reporter", { failuresOnly: true }], "jest-sonar", "jest-junit"]
};
