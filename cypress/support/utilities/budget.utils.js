// SELECTORS
const TABS = 'div.components-Header-style-header >';
const BUDGET_TABLE = 'table.containers-BudgetGrid-style-budgetGrid';
const REPORT_CHART = '.components-StackedChart-styles-stackedChart';
const TAB_SELECTED = '.components-Header-style-selected';
const CATEGORY_DROPDOWN = 'select';
const DESCRIPTION = '[name="description"]';
const VALUE = '[name="value"]';
const ADD = '[type="submit"]';
const POSITIVES = '.components-BudgetGridRow-style-pos';
const NEGATIVES = '.components-BudgetGridRow-style-neg';
const BALANCE_POSITIVE = '.components-Balance-style-balanceAmount.components-Balance-style-pos';
const BALANCE_NEGATIVE = '.components-Balance-style-balanceAmount.components-Balance-style-neg';

// UTILITY METHODS
export const verifyBudgetManagementLoad = () => {
  cy.get(TABS);
};

export const selectTab = tabName => {
  cy.get(TABS)
    .contains(tabName)
    .click();
};

export const verifyBudgetViewLoad = () => {
  cy.get(BUDGET_TABLE).should('be.visible');
};

export const verifyReportsViewLoad = () => {
  cy.get(REPORT_CHART).should('be.visible');
};

export const verifyTabSelected = tabName => {
  cy.get(TAB_SELECTED).contains(tabName);
};

export const selectCategory = category => {
  cy.get(CATEGORY_DROPDOWN).select(category);
};

export const enterDescription = description => {
  cy.get(DESCRIPTION).type(description);
};

export const enterValue = value => {
  cy.get(VALUE).type(value);
};

export const hitAdd = () => {
  cy.get(ADD).click();
};

export const verifySumIncomeEqTotalInflow = () => {
  let sumInc = 0;
  let totalInf = 0;

  cy.get(POSITIVES).each(($el, index, $list) => {
    cy
      .get(POSITIVES)
      .eq(index)
      .invoke('text')
      .then(text => {
        sumInc += parseFloat(text.substring(text.indexOf('$') + 1).replace(',',''));
      });
  })

  cy
    .get(BALANCE_POSITIVE)
    .eq(0)
    .invoke('text')
    .then(text => {
      totalInf = parseFloat(text.substring(text.indexOf('$') + 1).replace(',',''));
      expect(sumInc).to.equal(totalInf);
    });
};

export const verifySumExpenseEqTotalOutflow = () => {
  let sumExp = 0;
  let totalOutf = 0;

  cy.get(NEGATIVES).each(($el, index, $list) => {
    cy
      .get(NEGATIVES)
      .eq(index)
      .invoke('text')
      .then(text => {
        sumExp += parseFloat(text.substring(text.indexOf('$') + 1).replace(',',''));
      });
  })

  cy
    .get(BALANCE_NEGATIVE)
    .eq(0)
    .invoke('text')
    .then(text => {
      totalOutf = parseFloat(text.substring(text.indexOf('$') + 1).replace(',',''));
      expect(sumExp).to.equal(totalOutf);
    });
};

export const verifyTtlInfSumTtlOutEqWrkBal = () => {
  let totalInf = 0;
  let totalOutf = 0;
  let wrkBal = 0;

  cy
    .get(BALANCE_POSITIVE)
    .eq(0)
    .invoke('text')
    .then(text => {
      totalInf = parseFloat(text.substring(text.indexOf('$') + 1).replace(',',''));
    });

  cy
    .get(BALANCE_NEGATIVE)
    .eq(0)
    .invoke('text')
    .then(text => {
      totalOutf = parseFloat(text.substring(text.indexOf('$') + 1).replace(',',''));
      if (totalInf - totalOutf > 0) {
        cy
          .get(BALANCE_POSITIVE)
          .eq(1)
          .invoke('text')
          .then(text1 => {
            wrkBal = parseFloat(text1.substring(text1.indexOf('$') + 1).replace(',',''));
            expect(Math.round((totalInf - totalOutf) * 100) / 100).to.equal(Math.round(wrkBal * 100) / 100);
          });
      }
      if (totalInf - totalOutf < 0) {
        cy
          .get(BALANCE_NEGATIVE)
          .eq(1)
          .invoke('text')
          .then(text2 => {
            wrkBal = parseFloat(text2.substring(text2.indexOf('$') + 1).replace(',',''));
            expect(Math.round((totalInf - totalOutf) * 100) / 100).to.equal(Math.round(wrkBal * 100) / 100);
          });
      }
    });
};
