Pre-condition: make sure the appication under test is up and running in the localhost

1. navigate to the 'cypress-test-suite' folder 

2. npm install

3(a). To run the tests in GUI mode:

- npm run cypress:open (Cypress test runner opens up)
- click on 'Run all specs' button on the top right of the cypress test runner
- chorme browser opens up and runs the tests
- To re-run the tests, click on the 're-run' icon on the toolbar of the left pane where test are listed in the opened chrome browser

3(b). To run the test in non-gui mode (headless)
- npm run cypress:run (Cypress test runner opens up and tests are executed automatically, progress and results can be seen in the terminal)

3(c). To run the test in non-gui mode (headless) along with html report generation
- npm run cypress:run:report (Cypress test runner opens up and tests are executed automatically, progress and results can be seen in the terminal. Once test suite executio is complete, html report for the current run can be found in 'cypress-test-suite > mochawesome-report > TestReport_<currentDateTime>.html')