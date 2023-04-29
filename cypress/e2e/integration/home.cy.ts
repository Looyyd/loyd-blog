describe('Home Page', () => {
    beforeEach(() => {
      // Visit the home page before each test
      cy.visit('/');
    });
  
    it('loads the home page', () => {
      cy.contains('Filip Niedzielski');
    });
  });
  