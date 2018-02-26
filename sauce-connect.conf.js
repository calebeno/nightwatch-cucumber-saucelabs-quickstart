let sauceConnectLauncher = require('sauce-connect-launcher');

sauceConnectLauncher({
    username: 'cenoicc',
    accessKey: 'b5a3b936-59d0-4b48-a52b-027006675169'
}, function(err, sauceConnectProcess) {
    if (err) {
        console.error(err.message);
        return;
    }
    console.log("Sauce Connect ready");

    sauceConnectProcess.close(function() {
        console.log("Closed Sauce Connect process");
    })
});
