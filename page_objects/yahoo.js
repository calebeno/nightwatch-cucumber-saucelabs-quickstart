class YahooPage {
    constructor() {
        this.url = 'http://yahoo.com';
        this.elements = {
            body: 'body',
            searchBar: 'input[name="p"]'
        }
    }
}

module.exports = new YahooPage();
