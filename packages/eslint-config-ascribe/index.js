base = require('./base.js');

customRulesES6 = require('./rules/custom_es6.js');
customRulesImport = require('./rules/custom_import.js');
customRulesReact = require('./rules/custom_react.js');

customSettingsImport = require('./settings/custom_import.js');

module.exports = Object.assign(base, {
    extends: 'airbnb',
    parser: 'babel-eslint',

    // Airbnb-base provides import plugin already
    rules: Object.assign({}, customRulesES6, customRulesImport, customRulesReact),
    settings: Object.assign({}, customSettingsImport),
});
