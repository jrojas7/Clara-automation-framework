class Mexico_PO {
  elements = {
    titleHomePage: () =>
      cy.get(
        "#agiliza-todos-los-pagos-en-tu-empresa-de-forma-simple-y-transparente"
      ),
    menuLanguageHomePage: () => cy.get("div.menu-language"),
    brasilOption: () => cy.get("div.menu-language a[href='/pt-br/']"),
  };

  visitHomePage() {
    cy.visit("/");
  }

  clickBrasilOption() {
    this.elements.menuLanguageHomePage().trigger("mouseover");
    this.elements.brasilOption().click({ force: true });
  }
}
module.exports = new Mexico_PO();
