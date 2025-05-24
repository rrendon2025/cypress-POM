// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import '@shelex/cypress-allure-plugin';

require('dotenv').config();

// Hide fetch/XHR requests in the command log
const app = window.top;
if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML =
    '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');
  app.document.head.appendChild(style);
}

// Capture screenshots on test failures and add to Allure reports
Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    // Get the spec name without extension
    const specName = Cypress.spec.name.replace('.cy.js', '');
    
    // Format a clean test title
    const testTitle = `${runnable.parent.title} -- ${test.title}`;
    const safeTitle = testTitle.replace(/[^a-z0-9]/gi, '-').toLowerCase();
    
    // Take a screenshot and save it directly to our artifacts folder
    cy.screenshot(`${specName}/${safeTitle}`, {
      capture: 'viewport',
      overwrite: true,
      onAfterScreenshot($el, props) {
        // Also attach to Allure report
        cy.allure().attachment(
          'Screenshot on failure',
          props.path,
          'image/png'
        );
        
        // Copy to artifacts folder explicitly
        cy.task('log', `Screenshot saved: ${props.path}`);
        cy.readFile(props.path, 'base64').then(content => {
          const artifactPath = `cypress/artifacts/screenshots/${specName}`;
          cy.task('makeFolder', artifactPath, { log: false });
          cy.writeFile(`${artifactPath}/${safeTitle}.png`, content, 'base64');
        });
      }
    });
  }
});

// Alternatively you can use CommonJS syntax:
// require('./commands')