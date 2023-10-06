CYPRESS AUTOMATION PRESENTATION

This is an automation framework in the Cypress tool, that covers the testing of changing countries in the CLARA site, verifying the language.

1. We have 2 test cases written in Cucumber

2. We have 3 types of reports:

   - Allure (please, use the custom scripts from the "package.json" file in order to run/delete the report).
     You can find the index.html report inside the "allure-report" folder.
   - Cucumber HTML report (please, use the custom scripts from the "package.json" file in order to run/delete the report)
     You can find the index.html report inside the "cypress/results/cucumber-html" folder.
   - Mochawesome report (please, use the custom scripts from the "package.json" file in order to run/delete the report)
     You can find the mochawesome.html report inside "clara-project\mochawesome-report" folder.

3. The framework is using Page Object Model, in order to avoid code duplication and follow best practices.

4. The framework has also the advantage of changing environments, which is just a simulation, since we do not have 2 environments:

   - Environment by default (Production)
   - Staging environment (cypress > config > staging.json).
   - In order to use the "staging" environment, run the custom script in the "package.json" file: "triggerAllTests-staging". Using this custom script, "Colombia" is the country by default.

5. Data used for the test cases is inside the "cypress > fixtures > data.json" file.

6. There are some custom scripts in the "package.json" file, that can be executed from the terminal, using "npm run" before each custom script.

7. We are using "retries" for runMode and openMode, in order to execute one more time in case a test case is failing.

8. We are hidding fetch/XHR requests.

Note: Please, use "cypress": "12.14.0" in order to see Allure reports. Something is wrong with the last versions. Thanks.
