 describe('About page', () => {
    beforeEach(() => {
      // Visit the home page before each test
      cy.visit('/about');
    });
  
    it('loads the about page', () => {
      cy.contains('About Me');
    });
});
  
export {}; 