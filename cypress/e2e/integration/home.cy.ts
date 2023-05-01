describe('Home Page', () => {
    beforeEach(() => {
      // Visit the home page before each test
      cy.visit('/');
    });
  
    it('loads the home page', () => {
      cy.contains('Filip Niedzielski');
    });

    it('navigates to the about page when the about link is clicked', () => {
      cy.contains('About').click();
      cy.url().should('include', '/about');
    });

    it('navigates to the blog page when the blog link is clicked', () => {
      cy.contains('Blog').click();
      cy.url().should('include', '/blog');
    });
});
  
export {};