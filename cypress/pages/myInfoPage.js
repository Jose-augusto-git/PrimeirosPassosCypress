class myInfoPage{
    selectorsList(){
          //Criando um unico seletor para utilizar em varias partes do codigo
        const selectors = {
            //Formulario de nomes
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",

            //Formulario generico
            genericField: '.oxd-input--active',
            gereircDateField: "[placeholder='yyyy-dd-mm']",

            //Botões
            dateClosedButton: '.--close',
            submitButton: "[type='submit']",

            //Selecionar
            selectButton: '.oxd-select-text--after',
            selectNationality: ':nth-child(27)',
            selectMaritalStatus: '.oxd-select-dropdown > :nth-child(4)',
            selectBloodType: '.oxd-select-dropdown > :nth-child(8)'
        }
        return selectors
    }

    myInfoName(firstName,lastName){
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
       
    }

    myInfoId(){
        cy.get(this.selectorsList().genericField).eq(3).clear().type('TesteFunci')
        cy.get(this.selectorsList().genericField).eq(4).clear().type('TesteOutros')
        cy.get(this.selectorsList().genericField).eq(5).clear().type('Drivers License Number')

    }

    myInfoDate(){
        cy.get(this.selectorsList().gereircDateField).eq(1).clear().type('2025-05-05')
        cy.get(this.selectorsList().dateClosedButton).click()

    }

    myInfoButton(){
        cy.get(this.selectorsList().submitButton).eq(0).click()
        
    }
    myInfoTextSuccess(){
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close').click();
    }

    myInfoSelect(){
        cy.get(this.selectorsList().selectButton).eq(0).click()
        cy.get(this.selectorsList().selectNationality).click()

        cy.get(this.selectorsList().selectButton).eq(1).click()
        cy.get(this.selectorsList().selectMaritalStatus).click()

        cy.get(this.selectorsList().selectButton).eq(2).click()
        cy.get(this.selectorsList().selectBloodType).click()

    }

}

export default myInfoPage