describe('Blog page', () => {
    beforeEach(() => {
      // Visit the home page before each test
      cy.visit('/blog');
    });
  
    it('loads the blog page', () => {
      cy.contains('Blog Posts');
    });

    it('Can navigate to hello world post', () => {
        cy.contains('Hello World').click();
        cy.url({ timeout: 10000 }).should('include', '/blog/hello-world');
    });
});
  
export {}; 
