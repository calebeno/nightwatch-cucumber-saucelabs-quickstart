const {client} = require('nightwatch-cucumber');
const {Given, Then, When} = require('cucumber');

// Given(/^I open Yahoo`s search page$/, async () => {
//     const yahoo = client.page.yahoo();
//
//     await yahoo.navigate();
//     await yahoo.waitForElementVisible('@body', 1000);
// });

Given(/^I open the ICC Home Page$/, async () => {
    const iccHome = client.page.iccHomePage();

    await iccHome.navigate();
    await iccHome.waitForElementVisible('@body', 1000);
});

Then(/^the feature text "(.*)" is visible$/, async (text) => {
    const iccHome = client.page.iccHomePage();
    await iccHome.expect.element('@feature').text.to.equal(text);
    // await client.expect.element(iccHome.elements.feature).text.to.equal(text);
});

Then(/^the title is "(.*?)"$/, async (text) => {
    await client.assert.title(text)
});
// Then(/^the Yahoo search form exists$/, async () => {
//     const yahoo = client.page.yahoo();
//
//     await yahoo.assert.visible('@searchBar')
// });
