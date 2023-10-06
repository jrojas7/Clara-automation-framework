const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const fs = require("fs-extra");
const path = require("path");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

// promisified fs module (configuration for the cypress > config > staging.json file)
function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve("cypress\\config", `${file}.json`);

  if (!fs.existsSync(pathToConfigFile)) {
    console.log("No custom config file found.");
    return {};
  }

  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  pageLoadTimeout: 20000,
  defaultCommandTimeout: 10000,
  execTimeout: 10000,
  taskTimeout: 10000,
  requestTimeout: 10000,
  responseTimeout: 10000,

  viewportWidth: 1550,
  viewportHeight: 1050,

  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true,
  video: true,

  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporter-config.json",
  },

  hideXHR: true,

  retries: {
    runMode: 1,
    openMode: 1,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber());

      // Accept a configFile value otherwise use nothing
      const file = config.env.configFile || "";

      // For allure report
      allureWriter(on, config);
      
      return getConfigurationByFile(file);
    },

    baseUrl: "https://www.clara.com/es-mx/",

    specPattern: "cypress/integration/**/*.{js,jsx,ts,tsx,feature}",
  },
});
