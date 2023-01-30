import { defineConfig } from "cypress";
import { nxE2EPreset } from "@nrwl/cypress/plugins/cypress-preset";
// import  { cloudPlugin } from "cypress-cloud/plugin"
// const { cloudPlugin } = require("cypress-cloud/plugin");
export default defineConfig({
  projectId: 'euiPOC',
  e2e: {
    ...nxE2EPreset(__dirname),
    experimentalRunAllSpecs: true,
    /**
    * TODO(@nrwl/cypress): In Cypress v12,the testIsolation option is turned on by default. 
    * This can cause tests to start breaking where not indended.
    * You should consider enabling this once you verify tests do not depend on each other
    * More Info: https://docs.cypress.io/guides/references/migration-guide#Test-Isolation
    **/
    testIsolation: false,
 },
  experimentalStudio: true,
  // @ts-ignore

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
    // bind to the event we care about
    // setupNodeEvents(on, config) {
    //   cloudPlugin(on, config);
    // },
});
