const {client} = require('nightwatch-cucumber');
const {Given, Then, When} = require('cucumber');

Given(/^I open the ICC Home Page$/, async () => {
    const iccHome = client.page.iccHomePage();

    await iccHome.navigate();
    await iccHome.waitForElementVisible('@body', 1000);
});

Given(/^I open the ICC Contact Us Page$/, async () => {
    const iccContactUsPage = client.page.iccContactUsPage();

    await iccContactUsPage.navigate();
    await iccContactUsPage.waitForElementVisible('@body', 1000);
});

When(/^I click on the Start A Conversation Button$/, async () => {
    const iccHome = client.page.iccHomePage();
    await iccHome.clickStartAConversationButton();
});

When(/^I switch to the new tab$/, async () => {
    await client.window_handles(function(result) {
        let handle = result.value[1];
        client.switchWindow(handle);
    });
});

When(/^I fill out the conversation form$/, async () => {
    const iccContactUsPage = client.page.iccContactUsPage();
    await iccContactUsPage.fillOutFields();
});

Then(/^I should see the page header text "(.*)"$/, async (text) => {
    await client.waitForElementVisible('h1', 2000);
    await client.expect.element('h1').text.to.equal(text);
});

Then(/^the feature text "(.*)" is visible$/, async (text) => {
    const iccHome = client.page.iccHomePage();
    await iccHome.expect.element('@feature').text.to.equal(text);
});

Then(/^I should see the form filled out$/, async () => {
    const iccContactUsPage = client.page.iccContactUsPage();
    await iccContactUsPage.expect.element('@inputFirstName').value.to.equal('first');
    await iccContactUsPage.expect.element('@inputLastName').value.to.equal('last');
});
