import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './apps/eui-pw-e2e',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://localhost:4200',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file'
  },
  name: 'eui-poc',
  fullPromiseBased: true
}