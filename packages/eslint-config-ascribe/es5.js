base = require('./base.js');

customRules = require('./rules/custom.js');
noEs6Rules = require('./rules/no-es6.js');

// Remove ES6-specifics from base config
base.parserOptions.ecmaVersion = 5;
delete base.globals.fetch;
delete base.globals.Promise;


module.exports = Object.assign(base, {
    extends: 'airbnb-base',

    rules: Object.assign({}, customRules, noEs6Rules),
});
