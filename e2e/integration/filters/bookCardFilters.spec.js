import Elements from '../../support/elements';

describe('BookCard Collections Filters', () => {
  context('Desktop Resolution', () => {
    it('Collection filter toggle', () => {

      cy.visit('/?collec=OpenStax');

      cy.algoliaQueryRequest('algoliaRequest');
      cy.wait(1500);

      cy.get(Elements.booksCards.bookTags)
        .eq(1)
        .find('li:first-child button')
        .should('have.class', 'text-white');

      cy.get(Elements.booksCards.bookTags)
        .eq(1)
        .find('li:nth-of-type(1) button')
        .should('have.class', 'text-white');

      cy.get(Elements.booksCards.bookTags)
        .eq(1)
        .find('li:first-child button')
        .click();

      cy.visit('/?license=CC%20BY');
      cy.wait(1500);

      cy.get(Elements.booksCards.bookTags)
        .eq(1)
        .find('li:first-child button')
        .should('have.class', 'text-pb-red')
        .click();

      cy.visit('/?collec=Nursing%2FHealthcare');
      cy.wait(1500);

      cy.get(Elements.booksCards.bookTags)
        .eq(0)
        .find('li:first-child button')
        .should('have.class', 'text-white');

    });

  });
});
