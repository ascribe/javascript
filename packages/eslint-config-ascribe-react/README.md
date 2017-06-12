eslint-config-ascribe-react
---------------------------

[![npm](https://img.shields.io/npm/v/eslint-config-ascribe-react.svg)](https://www.npmjs.com/package/eslint-config-ascribe-react)

> Provides a React + ES6 [ESLint](http://eslint.org/) configuration against [Ascribe's JavaScript style guide](https://github.com/ascribe/javascript).

As Airbnb graciously provides a default ESLint configuration (see [here](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)), we extend that and override it when our rules differ (for ES6 rules, we pass through the extended rules from our base [eslint-config-ascribe](https://github.com/ascribe/javascript/tree/master/packages/eslint-config-ascribe) config).

## Installation

```bash
npm install --save-dev eslint-config-ascribe-react babel-eslint eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint
```

Two configurations are exported:

### eslint-config-ascribe-react

Includes both ES6 and React configurations. To use, add `"extends": "ascribe-react"` to your ESLint configuration:

```json
{
  "extends": "ascribe-react"
}
```

### eslint-config-ascribe-react/react-only

Includes just the React configuration. To use, add `"extends": "ascribe-react/react-only"` to your ESLint configuration:

```json
{
  "extends": "ascribe-react/react-only"
}
```

## npm releases

Since this package is part of our styleguide repo, automating npm releases is tricky (can't have multiple Git tags in one repo etc.).

So for now it's all manual. Make sure to actually publish the respective package folder, not the whole repo by going into the package folder first:

```bash
cd packages/eslint-config-ascribe-react

# update version number in package.json, then:
git commit -am "Release 2.0.2"
npm publish
```