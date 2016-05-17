eslint-config-ascribe
---------------------

Provides a [ESlint]() configuration against [Ascribe's JavaScript style
guide](../../README.md), which is based off of [Airbnb's](https://github.com/airbnb/javascript).

Airbnb graciously provides a default ESlint configuration (see [here](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)),
so we extend that and override it when our own rules differ.


Usage
=====

Three configurations are exported:

#### eslint-config-ascribe

Includes both ES6 and React configurations. Like airbnb's, it requires `eslint`,
`eslint-plugin-import`, `eslint-plugin-react`, and `eslint-plugin-jsx-a11y`, but also
`babel-eslint` for some ES6+ features that ESLint doesn't natively know about yet.

To use:

1. `npm install --save-dev eslint-config-ascribe babel-eslint eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint`
2. Add `"extends": "ascribe"` to your ESlint configuration

#### eslint-config-ascribe/es6

Provides just the ES6 configuration, and requires only `eslint`,`eslint-plugin-import`, and
`babel-eslint`.

To use:

1. `npm install --save-dev eslint-config-ascribe babel-eslint eslint-plugin-import eslint`
2. Add `"extends": "ascribe/es6" to your ESlint configuration

#### eslint-config-ascribe/react

Includes just the React configuration and requires `eslint`, `eslint-plugin-react`, and
`eslint-plugin-jsx-a11y`.

To use:

1. `npm install --save-dev eslint-config-ascribe eslint-plugin-react eslint-plugin-jsx-a11y eslint`
2. Add `"extends": "ascribe/react"` to your ESlint configuration
