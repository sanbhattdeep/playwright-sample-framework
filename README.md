# About the Project

v20 Automation Playwright Framework - This framework is based on Microsoft Playwright which enables reliable end-to-end testing for modern web apps.

Top Features:

- Easy to Configure.
- Auto-waits for all the relevant checks to pass and only then performs the requested action.
- Records videos for Test Cases.
- Records the test script and every action on the target page is turned into generated script.
- Generates trace file, which gives in-depth details of Test Case execution.
- Execution of test case is faster when compared with other competitive framework in market.
- Supports Headful/Headless mode execution for Firefox/Webkit/Google Chrome/Chromium/MS Edge on Windows/Linux/Mac machines.
- It supports API testing (From Playwright version 1.16 onwards)
- It can be used to simulate browser behaviour on mobile devices, and supports over 100+ devices.
- It has ability to produce and visually compare screenshots.
- To slow down execution slowMo option is available.
- Supports 'download' event monitoring, so there is no need for user to actually wait for downloads to finish.
- Supports Serial and Parallel execution.
- Allure/HTML Reports are generated after execution with an option to capture screenshot/video/trace file on failure.
- Aggressive Support from Microsoft so FREQUENT RELEASES and turn around time for any queries is 48 hours.

### Built With

- [Playwright](https://playwright.dev)
- [Typescript](https://www.typescriptlang.org/)

## Getting Started

### Prerequisites

The following software are required:

- nodejs : Download and Install Node JS from
  ```sh
  https://nodejs.org/en/download/
  ```
- Install Java 8 or above, Allure Reports require Java 8 or higher.

- allure commandline : Install allure command line for generating Allure Reports using
  ```sh
  npm ci -g allure-commandline
  ```

### Installation

1. Clone the repo using below URL

```sh
https://aws05pwcgit01.aws05.eisgroup.com/gitlab/pwc_build/v20-automation.git
```

2. Navigate to folder and install npm packages using:

```sh
npm install
```

<!-- USAGE EXAMPLES-->

## Usage

1. For Test Configuration i.e. Browser, Timeouts etc., change required parameters in `playwright.config.ts`.

2. To execute entire test suite or group of tests provide a suitable tag for e.g. `@Smoke` at the start of your test case name and provide the same tag in `package.json` against `test` along with ENV where "ENV" is the name of your environment for e.g. "sandbox"and execute below command , `Test Cases are present in "tests" folder`:

```JS
npm test
```

3. For recording test scripts :

```JS
npm run test:record
```

4. For Allure Report generation execute :

```JS
npm run allureReport
```
5. For HTML Report generation execute below command , single static HTML report(index.html) which can be sent via email is generated in "html-report" folder:

```JS
npm run test:report
```

6. For viewing trace files, go to folder where `trace.zip` is generated and execute :
```JS
npx playwright show-trace trace.zip
```

7. Logging is implemented in `Logger.ts` using winston logger. 

`https://github.com/winstonjs/winston#logging`
