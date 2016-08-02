customRulesReact = require('./rules/custom_react.js');
customSettingsReact = require('./settings/custom_react.js');

module.exports = {
    extends: [
        'airbnb',
        'ascribe',
    ],
    rules: Object.assign({}, customRulesReact),
    settings: Object.assign({}, customSettingsReact),
};
