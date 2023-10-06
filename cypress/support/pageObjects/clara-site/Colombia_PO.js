class Colombia_PO {
  elements = {
    titleHomePage: () =>
      cy.get(
        "h1#agiliza-todos-los-pagos-en-tu-empresa-de-forma-simple-y-transparente"
      ),
  };
}
module.exports = new Colombia_PO();
