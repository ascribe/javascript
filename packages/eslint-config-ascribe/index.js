base = require('./base.js');

customRulesES6 = require('./rules/custom_es6.js');
customRulesImport = require('./rules/custom_import.js');

customSettingsImport = require('./settings/custom_import.js');

module.exports = Object.assign(base, {
    extends: 'airbnb-base',
    parser: 'babel-eslint',

    // Airbnb-base already requires import plugin
    rules: Object.assign({}, customRulesES6, customRulesImport),
    settings: Object.assign({}, customSettingsImport),
});
