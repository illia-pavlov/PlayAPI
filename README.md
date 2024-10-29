# PlayAPI

## Description

PlayAPI is a scalable API and UI testing framework built on Playwright and TypeScript. Designed for modern web applications, it supports cross-browser automation, efficient API testing, and flexible test case management. Ideal for QA teams looking to integrate fast, reliable, and maintainable tests into their CI/CD pipelines.

## Features

- **Cross-Browser Support**: Run tests across multiple browsers to ensure compatibility.
- **API Testing**: Efficiently test RESTful APIs with built-in assertions and flexible request handling.
- **UI Testing**: Automate user interactions and validate UI components using Playwright.
- **TypeScript Integration**: Leverage TypeScript for type safety and improved development experience.
- **CI/CD Friendly**: Easily integrate with CI/CD pipelines using GitHub Actions.

## Installation

To get started with PlayAPI, clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/illia-pavlov/PlayAPI.git
cd playapi
npm install
```

## Scripts

- **Run All Tests**:  
  Run all tests (API and UI):

  ```bash
  npm test
  ```
- **Run API Tests**:
  Execute only the API tests:

  ```bash
  npm run test:api
  ```

- **Run UI Tests**:
  Execute only the UI tests:

  ```bash
  npm run test:ui
  ```

## Configuration

PlayAPI uses environment variables to manage API and UI base URLs. Make sure to create a .env file in the root directory and define the following variables:

```bash
API_BASE_URL=https://your.api.url
UI_BASE_URL=https://your.ui.url
```

## GitHub Actions

PlayAPI includes a GitHub Actions workflow for running end-to-end (E2E) tests. The configuration is set to run manually but can be easily modified to trigger on specific branches or schedules. Here's a brief overview of the workflow:

- **Jobs**: Runs on `ubuntu-latest` using Playwright's Docker image.
- **Environment Variables**: Uses secrets to access base URLs securely.
- **Steps**:
  - Checks out the code.
  - Installs dependencies.
  - Runs the E2E tests.
  - Uploads the test report as an artifact.
