describe('template spec', () => {
  it('CT01 Login - Sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get("[name='username']").type('Admin');
    cy.get("[name='password']").type('admin123');
    cy.get("[type='submit']").click();

    cy.location('pathname').should('equal','/web/index.php/dashboard/index')

    cy.get('.oxd-topbar-header-title').should('have.text','Dashboard');
  })


  it('CT02 Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get("[name='username']").type('Admin');
    cy.get("[name='password']").type('123');
    cy.get("[type='submit']").click();

    cy.get("[role='alert']");

  })
})