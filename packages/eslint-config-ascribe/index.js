base = require('./base.js');

customRules = require('./rules/custom.js');
customRulesImport = require('./rules/custom_import.js');

customSettingsImport = require('./settings/custom_import.js');

module.exports = Object.assign(base, {
    extends: 'airbnb-base',
    parser: 'babel-eslint',

    // Airbnb-base already requires import plugin
    rules: Object.assign({}, customRules, customRulesImport),
    settings: Object.assign({}, customSettingsImport),
});
