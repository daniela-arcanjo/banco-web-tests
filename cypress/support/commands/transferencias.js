Cypress.Commands.add('realizarTransferencias', (contaOrigem, contaDestino, valor) => {
        cy.SelecionarOpcaoNaCombobox('conta-origem', contaOrigem)
        cy.SelecionarOpcaoNaCombobox('conta-destino', contaDestino)

        cy.get('#valor').click().type(valor)

        cy.contains('button', 'Transferir').click()
})