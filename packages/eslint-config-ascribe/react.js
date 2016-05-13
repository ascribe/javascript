base = require('./base.js');
customReact = require('./rules/custom_react.js');

module.exports = Object.assign(base, {
    extends: [
        'airbnb/rules/react',
        'airbnb/rules/react-a11y',
    ],

    rules: customReact,
});
