describe('SF landing page features', function()
{
    
    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data;
        })
    })

    it('Verify the Title of SF landing page', function(){
        cy.visit(this.data.qaUrl);
        cy.title().should('eq', 'Scripture Forge');
   })

    it('Verify Negative scenario for the Title of SF landing page', function(){
        cy.title().should('eq', 'ScriptureForge');
    })

    it('Verify the Sign Up button on Header and Footer', function(){
        cy.get('.statement-buttons').should('be.visible');
    })
})