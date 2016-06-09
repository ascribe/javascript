base = require('./base.js');

customRulesES6 = require('./rules/custom_es6.js');
customRulesImport = require('./rules/custom_import.js');

customSettingsImport = require('./settings/custom_import.js');

module.exports = Object.assign(base, {
    extends: [
        'airbnb-base',
        'airbnb-base/rules/strict',
    ],

    parser: 'babel-eslint',

    // Airbnb-base provides import plugin already
    rules: Object.assign({}, customRulesES6, customRulesImport),
    settings: Object.assign({}, customSettingsImport),
});
