base = require('eslint-config-ascribe/base.js');
customRulesReact = require('./rules/custom_react.js');

module.exports = Object.assign(base, {
    extends: [
        'airbnb/rules/react',
        'airbnb/rules/react-a11y',
    ],

    parser: 'babel-eslint',
    rules: customRulesReact,
});
