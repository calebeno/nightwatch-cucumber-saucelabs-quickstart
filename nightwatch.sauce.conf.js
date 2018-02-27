require('nightwatch-cucumber')({
    cucumberArgs: [
        '--require-module', 'babel-core/register',
        '--require', 'features/step_definitions',
        '--format', 'json:reports/cucumber.json', 'features']
});

module.exports = {
    output_folder: 'reports',
    custom_assertions_path: '',
    page_objects_path: 'page_objects',
    live_output: false,
    disable_colors: false,

    selenium: {
        start_process: false,
        server_path: '',
        log_path: '',
        host: '127.0.0.1',
        port: 4444,
        cli_args: {
            'webdriver.chrome.driver': '',
            'webdriver.ie.driver': ''
        }
    },

    test_workers: {enabled: true, workers: 'auto'},

    test_settings: {
        default: {
            launch_url: 'http://localhost',
            selenium_port: 80,
            selenium_host: 'ondemand.saucelabs.com',
            silent: true,
            screenshots: {
                enabled: false,
                path: ''
            },
            username: '${SAUCE_USERNAME}',
            access_key: '${SAUCE_ACCESS_KEY}',

            desiredCapabilities: {
                javascriptEnabled: true,
                acceptSslCerts: true
            }
        },

        chrome: {
            desiredCapabilities: {
                platform: 'Windows 10',
                browserName: 'chrome',
                version: 'latest'
            }
        },

        firefox: {
            desiredCapabilities: {
                platform: 'Windows 10',
                browserName: 'firefox',
                version: 'latest'
            }
        },

        edge: {
            desiredCapabilities: {
                platform: 'Windows 10',
                browserName: 'MicrosoftEdge',
                version: 'latest'
            }
        }
    }
};
