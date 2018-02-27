Feature: ICC Main Test

    Scenario: Going to ICC Main Page
        Given I open the ICC Home Page
        Then the feature text "Digital has changed the game. Are you ready?" is visible

    Scenario: Going to the ICC Briefing Page via the Start A Conversation Button
        Given I open the ICC Home Page
        When I click on the Start A Conversation Button
        And I switch to the new tab
        Then I should see the page header text "Client Briefing"

    Scenario: Filling Out the ICC Briefing Page
        Given I open the ICC Contact Us Page
        When I fill out the conversation form
        Then I should see the page header text "Contact Us"
        And I should see the form filled out
