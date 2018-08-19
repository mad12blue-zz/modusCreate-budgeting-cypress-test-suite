// SELECTORS

// UTILITY METHODS
export const visitUrl = url => {
  cy.visit(url, { failOnStatusCode: false });
};

export const verifyPageLoad = title => {
  cy.title().should('include', title);
};
