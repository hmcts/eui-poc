export const config: CodeceptJS.MainConfig = {
  tests: './src/pw-e2e',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost:4200',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file'
  },
  name: 'eui-pw-e2e',
  fullPromiseBased: true
}