module.exports = {
    url: 'http://go.icctechnology.com/briefing-request-0',
    elements: {
        body: 'body',
        inputFirstName: 'input[name="firstname"]',
        inputLastName: 'input[name="lastname"]'
    },
    commands: [{
        fillOutFields: function() {
            return this.waitForElementVisible('@inputFirstName', 1000)
                .setValue('@inputFirstName', 'first')
                .setValue('@inputLastName', 'last');
        }
    }]
};
