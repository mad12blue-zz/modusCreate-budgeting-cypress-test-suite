// we decided to not use this pattern anymore since for some reason it messes up the watcher functionality on linux
// const {given} = require('cypress-cucumber-preprocessor')

const miscUtils = require('../utilities/misc.utils');
const dataUtils = require('../utilities/data.utils');
const budgetUtils = require('../utilities/budget.utils');
const reportUtils = require('../utilities/report.utils');

// GIVEN

given('I open Budgeting page', () => {
  miscUtils.visitUrl(dataUtils.PAGE_URL);
});

given('I am on Budget management app', () => {
  budgetUtils.verifyBudgetManagementLoad();
});

given('I am on {string} view', tabName => {
  budgetUtils.verifyTabSelected(tabName);
});

// WHEN

when('I goto {string} view of Budget management', tabName => {
  budgetUtils.selectTab(tabName);
});

// when('I select {string} from category dropdown', (type) => {
//   budgetUtils.selectCategory(type);
// });

when('I select {string} from category dropdown', category => {
  budgetUtils.selectCategory(category);
});

when('I enter {string} as Description', description => {
  budgetUtils.enterDescription(description + dataUtils.uniqueString);
});

when('I enter {string} as Value', value => {
  budgetUtils.enterValue(value);
});

when('I hit the add button', () => {
  budgetUtils.hitAdd();
});


// THEN

then(`I see {string} in the title`, title => {
  miscUtils.verifyPageLoad(title);
});

then(`I see {string} view load`, view => {
  if (view === 'Budget') {
    budgetUtils.verifyBudgetViewLoad();
  }
  if (view === 'Reports') {
    budgetUtils.verifyReportsViewLoad();
  }
});

then(`I see sum of {string} amount equals total {string}`, (incExp, inOut) => {
  if (incExp === 'Income' && inOut === 'Inflow') {
    budgetUtils.verifySumIncomeEqTotalInflow();
  }
  if (incExp === 'Expense' && inOut === 'Outflow') {
    budgetUtils.verifySumExpenseEqTotalOutflow();
  }
});

then(`I see sum of {string} amount equals total {string} bar`, (incExp, inOut) => {
  if (incExp === 'Expense' && inOut === 'Outflow') {
    reportUtils.verifySumExpenseEqTotalOutflow();
  }
});

then(`I see sum of Total Inflow and Total Outflow equals Working Balance`, () => {
  budgetUtils.verifyTtlInfSumTtlOutEqWrkBal();
});
