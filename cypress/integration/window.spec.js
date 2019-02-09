describe('Window', () => {
    it('should have correct meta', () => {
        cy.visit('/');

        cy.document()
            .should('have.property', 'charset')
            .should('eq', 'UTF-8');

        cy.title().should('eq', 'BNTI');
    });
});
