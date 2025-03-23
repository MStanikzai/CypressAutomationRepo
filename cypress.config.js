const { defineConfig } = require("Cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',

  defaultCommandTimeout: 6000,
    env: {
      url : "https://rahulshettyacademy.com/"
    },
    retries: {
      runMode: 1
    },
    projectId: "zjwd2y",

  e2e: {
    video: true, //Add this for video recording
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/integration/examples/*.js'

  },
});
