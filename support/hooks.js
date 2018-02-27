const {client} = require('nightwatch-cucumber');
const {Before, After} = require('cucumber');

After(function () {
    return client.end();
});
