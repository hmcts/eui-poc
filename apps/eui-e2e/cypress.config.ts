import { defineConfig } from "cypress";
import { nxE2EPreset } from "@nrwl/cypress/plugins/cypress-preset";
// import  { cloudPlugin } from "cypress-cloud/plugin"
// const { cloudPlugin } = require("cypress-cloud/plugin");
export default defineConfig({
  projectId: 'euiPOC',
  e2e: {
    ...nxE2EPreset(__dirname),
    experimentalRunAllSpecs: true,
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
