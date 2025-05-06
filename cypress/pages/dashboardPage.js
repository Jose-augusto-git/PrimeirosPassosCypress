class dashboardPage{
    selectorsList(){
        const selectors = {
            sectionTitleTopBar: '.oxd-topbar-header-title',
            dashbordGrid: '.orangehrm-dashboard-grid',
        }

        return selectors
    }

    accessDashboard(){
        cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    }

    validationDashboard(){
        cy.get(this.selectorsList().sectionTitleTopBar)
        cy.get(this.selectorsList().dashbordGrid)
    }


}

export default dashboardPage