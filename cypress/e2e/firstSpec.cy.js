describe('Functional tests e2e', () => {
    beforeEach(() => {
        cy.visit('https://www.demoblaze.com/index.html');
    });
    it('should register, login and add product to the cart', () => {
       cy.on('window:alert', (alertText) => {
            expect(alertText).to.match(/Sign up successful./i);
          });
      // register
        cy.get('a[data-target="#signInModal"]').click();
        cy.get('input#sign-username').type('witrihfden');
        cy.get('input#sign-password').type('Password1%');
        cy.contains('button', 'Sign up').click();
      // login
        cy.get('a[data-target="#logInModal"]').click();
        cy.get('input#loginusername').type('witrihfden');
        cy.get('input#loginpassword').type('Password1%');
        cy.contains('button', 'Log in').click();
    // Verify login was successful
        cy.contains('Welcome witrihfden').should('be.visible');
    // Add product to the cart
        cy.contains('a', 'Samsung galaxy s6').click();
        cy.contains('a', 'Add to cart').click();
        cy.get('#cartur').click();
    // Verify product was added to the cart
        cy.contains('td', 'Samsung galaxy s6').should('be.visible');
    });
  });
