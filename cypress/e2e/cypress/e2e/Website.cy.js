describe('Open Opex Website', () => {
    it('landing page', () => {
        cy.visit('https://www.opexconsult.com/')
        cy.title().then((title) => {
         let Pagetitle =  cy.log(`Page title is: ${title}`);
        cy.wrap(title).should('eq', 'Opex Consult')
        cy.contains('Get in touch').click()
        cy.get('.mb-12').should('have.text', "Let's level up your brand, together");
        cy.get('.flex-shrink-0 > img').should('be.visible')
        cy.get('.gap-y-5 > .text-4xl').should('be.visible')

        
    
        });

    
    
    
    })

    

});
