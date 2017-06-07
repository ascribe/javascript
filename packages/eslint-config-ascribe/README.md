eslint-config-ascribe
---------------------

Provides a ES6 [ESLint](http://eslint.org/) configuration against [Ascribe's JavaScript style guide](../../README.md), which is based off of [Airbnb's](https://github.com/airbnb/javascript).

As Airbnb graciously provides a default ES6 ESLint configuration (see [here](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)), we extend that and override it when our rules differ.


Usage
=====

Two configurations are exported:

### eslint-config-ascribe

Full ES6 configuration. Like airbnb's, it requires `eslint` and `eslint-plugin-import`, but also
`babel-eslint` for some ES6+ features that ESLint doesn't natively know about yet.

To use:

1. `npm install --save-dev eslint-config-ascribe babel-eslint eslint-plugin-import eslint`
2. Add `"extends": "ascribe"` to your ESLint configuration

### eslint-config-ascribe/es5

Same as the full configuration, except with all ES6 features turned off and uses ESLint's default
parser.

To use:

1. `npm install --save-dev eslint-config-ascribe babel-eslint eslint-plugin-import eslint`
2. Add `"extends": "ascribe/es5"` to your ESLint configuration
