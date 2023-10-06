@regression

Feature: Change Languages

    This Feature will test that the pages are displaying correct language after select a country.

    Background: Visit the CLARA site
        Given I visit the CLARA site

    @portuguese
    Scenario: Change the country from Mexico to Brazil and verify the language is correct
        When I click the Brasil country
        Then The title should be displayed in Portuguese

    @spanish
    Scenario: Change the country from Brazil to Colombia and verify the language is correct
        When I click the Brasil country
        And I click the Colombia country
        Then The title should be displayed in Spanish

