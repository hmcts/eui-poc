/* eslint-disable */
export default {
  displayName: "nfdiv-features",
  preset: "../../jest.preset.js",
  setupFilesAfterEnv: ["<rootDir>/src/test-setup.ts"],
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.spec.json",
      stringifyContentPathRegex: "\\.(html|svg)$",
    },
  },
  transform: {
    "^.+\\.(ts|mjs|js|html)$": "jest-preset-angular",
  },
  transformIgnorePatterns: ["node_modules/(?!.*\\.mjs$)"],
  reporters: [
    "default",
    ["jest-html-reporters", {
      "publicPath": "./libs/nfdiv-features/coverage/run/html-report",
      "filename": "report.html",
      "openReport": true,
      JEST_HTML_REPORTERS_ENABLE_MERGE_DATA: true,
    }]
  ],
  snapshotSerializers: [
    "jest-preset-angular/build/serializers/no-ng-attributes",
    "jest-preset-angular/build/serializers/ng-snapshot",
    "jest-preset-angular/build/serializers/html-comment",
  ],
};
