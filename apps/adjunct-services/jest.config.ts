/* eslint-disable */
export default {
  displayName: 'adjunct-services',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    }
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  reporters: [
    "default",
    ["jest-html-reporters", {
      "publicPath": "apps/adjunct-services/coverage/run/html-report",
      "filename": "report.html",
      "openReport": true,
      JEST_HTML_REPORTERS_ENABLE_MERGE_DATA: true,
    }]
  ]
};
