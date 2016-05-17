base = require('./base.js');
customES6 = require('./rules/custom_es6.js');
customReact = require('./rules/custom_react.js');

module.exports = Object.assign(base, {
    extends: 'airbnb',
    parser: 'babel-eslint',

    rules: Object.assign({}, customES6, customReact),
});
