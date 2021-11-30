describe('rich-text: QuillEditor component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=quilleditor--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to QuillEditor!');
    });
});
