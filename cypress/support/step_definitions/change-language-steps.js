"use-strict";

import {
  Before,
  Given,
  When,
  And,
  Then,
} from "cypress-cucumber-preprocessor/steps";
import Brasil_PO from "../pageObjects/clara-site/Brasil_PO";
import Mexico_PO from "../pageObjects/clara-site/Mexico_PO";
import Colombia_PO from "../pageObjects/clara-site/Colombia_PO";

/// <reference types = "cypress"/>

Before(() => {
  cy.fixture("data").then(function (page) {
    globalThis.page = page;
  });
});

Given("I visit the CLARA site", () => {
  Mexico_PO.visitHomePage();
});

When("I click the Brasil country", () => {
  Mexico_PO.clickBrasilOption();
});

When("I click the Colombia country", () => {
  Brasil_PO.clickColombiaOption();
});

Then("The title should be displayed in Portuguese", () => {
  Brasil_PO.elements.titleHomePage().should("have.text", page.portugueseTitle);
});

Then("The title should be displayed in Spanish", () => {
  Colombia_PO.elements.titleHomePage().should("have.text", page.spanishTitle);
});
