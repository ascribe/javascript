base = require('./base.js');
customES6 = require('./rules/custom_es6.js');
customReact = require('./rules/custom_react.js');

module.exports = Object.assign(base, {
    extends: 'airbnb',

    rules: Object.assign({}, customES6, customReact),
});
