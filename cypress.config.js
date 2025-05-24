const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
require('dotenv').config();
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL || 'https://www.saucedemo.com/',
    viewportWidth: 1280,
    viewportHeight: 720,
    setupNodeEvents(on, config) {
      // Load the environment variables from .env file
      config.env = config.env || {};
      
      // Make process.env variables available to Cypress.env()
      config.env.USERNAME = process.env.SAUCE_USERNAME || 'standard_user';
      config.env.PASSWORD = process.env.PASSWORD || 'secret_sauce';
      config.env.BASE_URL = process.env.BASE_URL || 'https://www.saucedemo.com/';
      
      // Add task for logging
      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
        makeFolder(folderPath) {
          if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
            console.log(`Created folder: ${folderPath}`);
          }
          return null;
        }
      });
      
      // Setup Allure reporting
      allureWriter(on, config);
      return config;
    },
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    videosFolder: 'cypress/artifacts/videos',
    screenshotsFolder: 'cypress/artifacts/screenshots',
    video: true,
    screenshotOnRunFailure: true,
  },
  env: {
    allure: true,
    allureReuseAfterSpec: true,
    allureResultsPath: 'allure-results',
  },
});
