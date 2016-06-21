customRulesReact = require('./rules/custom_react.js');

module.exports = {
    extends: [
        'airbnb',
        'ascribe',
    ],
    rules: Object.assign({}, customRulesReact),
};
