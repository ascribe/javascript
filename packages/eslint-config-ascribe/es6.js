base = require('./base.js');
customES6 = require('./rules/custom_es6.js');

module.exports = Object.assign(base, {
    extends: [
        'airbnb-base',
        'airbnb-base/rules/strict',
    ],

    rules: customES6,
    parser: 'babel-eslint',
});
