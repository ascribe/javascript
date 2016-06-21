eslint-config-ascribe-react
---------------------------

Provides a React + ES6 [ESLint](http://eslint.org/) configuration against [Ascribe's JavaScript
style guide](../../README.md), which is based off of [Airbnb's](https://github.com/airbnb/javascript).

As Airbnb graciously provides a default ESLint configuration (see [here](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb));
we extend that and override it when our rules differ.

Extends from [eslint-config-ascribe](../eslint-config-ascribe) and adds React-specific rules.


Usage
=====

Two configurations are exported:

### eslint-config-ascribe-react

Includes both ES6 and React configurations. Like airbnb's, it requires `eslint`,
`eslint-plugin-import`, `eslint-plugin-react`, and `eslint-plugin-jsx-a11y`, but also
`babel-eslint` for some ES6+ features that ESLint doesn't natively know about yet.

To use:

1. `npm install --save-dev eslint-config-ascribe babel-eslint eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint`
2. Add `"extends": "ascribe-react"` to your ESLint configuration

### eslint-config-ascribe-react/react-only

Includes just the React configuration and requires `eslint`, `eslint-plugin-react`, and
`eslint-plugin-jsx-a11y`.

To use:

1. `npm install --save-dev eslint-config-ascribe eslint-plugin-react eslint-plugin-jsx-a11y eslint`
2. Add `"extends": "ascribe-react/react-only"` to your ESLint configuration
