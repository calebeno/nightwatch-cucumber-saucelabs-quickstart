module.exports = {
    url: 'https://www.icctechnology.com/',
    elements: {
        body: 'body',
        feature: 'h1.feature.homepage',
        startAConversationButton: {
            selector: '//a[text()[contains(., "Start a Conversation")]]',
            locateStrategy: 'xpath'
        }
    },
    commands: [{
        clickStartAConversationButton: function() {
            return this.waitForElementVisible('@startAConversationButton', 1000)
                .click('@startAConversationButton');
        }
    }]
};
