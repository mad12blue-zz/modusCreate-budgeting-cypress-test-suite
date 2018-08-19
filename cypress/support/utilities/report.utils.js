// SELECTORS
const INF_OUTF = 'text.components-StackedChart-styles-value';
const EXPENSES = 'span.components-Legend-styles-value';

// UTILITY METHODS
export const verifySumIncomeEqTotalInflow = () => {
  let totalInf = 0;

  cy
    .get(INF_OUTF)
    .eq(0)
    .invoke('text')
    .then(text => {
      totalInf = parseFloat(text.substring(text.indexOf('$') + 1).replace(',',''));
    });
};

export const verifySumExpenseEqTotalOutflow = () => {
  let sumExp = 0;
  let totalOutf = 0;

  cy.get(EXPENSES).each(($el, index, $list) => {
    cy
      .get(EXPENSES)
      .eq(index)
      .invoke('text')
      .then(text => {
        sumExp += parseFloat(text.substring(text.indexOf('$') + 1).replace(',',''));
      });
  })

  cy
    .get(INF_OUTF)
    .eq(1)
    .invoke('text')
    .then(text => {
      totalOutf = parseFloat(text.substring(text.indexOf('$') + 1).replace(',',''));
      expect(Math.round(sumExp * 100) / 100).to.equal(totalOutf);
    });
};
