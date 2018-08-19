--------------------------------------------------------------------------------------------
Running the test suite:
--------------------------------------------------------------------------------------------
Pre-condition: make sure the appication under test is up and running in the localhost

1. git clone https://github.com/mad12blue/modusCreate-budgeting-cypress-test-suite 

2. navigate to the 'modusCreate-budgeting-cypress-test-suite' folder 

3. npm install

4(a). To run the tests in GUI mode:

- npm run cypress:open (Cypress test runner opens up)
- click on 'Run all specs' button on the top right of the cypress test runner
- chorme browser opens up and runs the tests
- To re-run the tests, click on the 're-run' icon on the toolbar of the left pane where test are listed in the opened chrome browser

4(b). To run the test in non-gui mode (headless)
- npm run cypress:run (Cypress test runner opens up and tests are executed automatically, progress and results can be seen in the terminal)

4(c). To run the test in non-gui mode (headless) along with html report generation
- npm run cypress:run:report (Cypress test runner opens up and tests are executed automatically, progress and results can be seen in the terminal. Once test suite executio is complete, html report for the current run can be found in 'modusCreate-budgeting-cypress-test-suite > mochawesome-report > TestReport_<currentDateTime>.html')

--------------------------------------------------------------------------------------------
Additional Info:
--------------------------------------------------------------------------------------------
* Cucumber test can be found in 'modusCreate-budgeting-cypress-test-suite > cypress > support > Budget.feature' file
* html report for the current run can be found in 'modusCreate-budgeting-cypress-test-suite > mochawesome-report > TestReport_<currentDateTime>.html' file
* Page Object Model pattern is followed, Selectors and Utility methods can be found in 'modusCreate-budgeting-cypress-test-suite > cypress > support > utilities' folder