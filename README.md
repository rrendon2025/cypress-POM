# Cypress POM Framework

This is a Cypress automation framework using Page Object Model (POM) pattern. For Demonstration Purposes only.

## Features

- Page Object Model architecture
- Custom commands
- Environment variable management
- Allure reporting
- Video recording of test executions
- Automatic screenshot capture for failed tests
- Well-structured and maintainable code

## Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)
- Java JDK 11 or higher (for Allure reporting)

## Installation and Setup

1. Clone the repository:
```bash
git clone https://github.com/your-username/cypress-POM.git
cd cypress-POM
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following content:
```
SAUCE_USERNAME=standard_user
PASSWORD=secret_sauce
BASE_URL=https://www.saucedemo.com/
```

4. Set up Java for Allure reporting:
```bash
# Windows (PowerShell)
$env:JAVA_HOME = "C:\Program Files\Java\jdk-11"

# macOS/Linux
export JAVA_HOME=/path/to/your/jdk
```

## Project Structure

```
cypress-POM/
├── cypress/
│   ├── artifacts/     
│   │   ├── videos/    # Test videos
│   │   └── screenshots/ # Screenshots of failed tests
│   ├── e2e/           # Test files
│   ├── fixtures/      # Test data
│   ├── locators/      # Element locators
│   ├── pages/         # Page objects
│   └── support/       # Support files, commands and base classes
├── .env               # Environment variables
├── allure-results/    # Generated during test execution
├── allure-report/     # Generated Allure reports
├── cypress.config.js  # Cypress configuration
├── package.json       # Project dependencies
└── README.md          # Project documentation
```

## Running Tests

### Open Cypress Test Runner (Interactive Mode)
```bash
npm run cypress:open
```

### Run Tests with Video Recording
```bash
npm run test:clean:with-video
```

### Run Tests without Video Recording
```bash
npm run test:clean:no-video
```

### Run Tests & Generate Allure Report & Open Report
```bash
npm run test:full-report
```

### Generate Allure Report (after running tests)
```bash
npm run allure:report
```

### Open Allure Report in Browser
```bash
npm run allure:open
```

### Clean Up Before Committing to Git
```bash
npm run clean:for-git
```
This removes node_modules and test artifacts to reduce repository size.

## Test Failure Handling

When a test fails:
1. A screenshot is automatically captured and saved to `cypress/artifacts/screenshots/`
2. The screenshot is also attached to the Allure report for easy access
3. This provides visual evidence of the state of the application at the time of failure

## Troubleshooting

- **Allure Report Issues:** Ensure JAVA_HOME is correctly set to your JDK installation folder (not the bin directory).
- **Video Recording:** If videos aren't generating, check that the cypress/artifacts/videos directory exists.
- **Screenshot Issues:** If screenshots aren't being captured, ensure the cypress/artifacts/screenshots directory exists.
- **After Cloning:** Always run `npm install` to reinstall dependencies.
- **Environment Variables:** On Windows, use SAUCE_USERNAME instead of USERNAME to avoid conflicts with system variables.

## Author
Ralph Harris Rendon