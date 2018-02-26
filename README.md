## NightwatchJS - Cucumber - Sauce Labs

This code will get you started using NightwatchJS and Cucumber to write e2e automated tests.  The tests can be run both locally and via Sauce Labs (with credentials).

### Setup

```
npm install
```

### Test Run Commands
##### Run Tests Locally
```
npm run e2e:chrome
npm run e2e:firefox
```
##### Run Tests On Sauce Labs
```
export  SAUCE_USERNAME={saucelabs username}
export  SAUCE_ACCESS_KEY={saucelabs access key}
```
```
npm run e2e:sauce:chrome
npm run e2e:sauce:firefox
```
