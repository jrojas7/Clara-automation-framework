class Brasil_PO {
  elements = {
    titleHomePage: () =>
      cy.get(
        "h1#agiliza-todos-los-pagos-en-tu-empresa-de-forma-simple-y-transparente > span"
      ),
    menuLanguageHomePage: () => cy.get("div.menu-language"),
    colombiaOption: () => cy.get("div.menu-language a[href='/es-co/']"),
  };

  clickColombiaOption() {
    this.elements.menuLanguageHomePage().trigger("mouseover");
    this.elements.colombiaOption().click({ force: true });
  }
}
module.exports = new Brasil_PO();
