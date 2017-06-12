eslint-config-ascribe
---------------------

[![npm](https://img.shields.io/npm/v/eslint-config-ascribe.svg)](https://www.npmjs.com/package/eslint-config-ascribe)

> Provides a ES6 [ESLint](http://eslint.org/) configuration against [Ascribe's JavaScript style guide](https://github.com/ascribe/javascript).

As Airbnb graciously provides a default ES6 ESLint configuration (see [here](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)), we extend that and override it when our rules differ.


## Installation

```bash
npm install --save-dev eslint-config-ascribe babel-eslint eslint-plugin-import eslint
```

Two configurations are exported:

### eslint-config-ascribe

Full ES6 configuration. Like airbnb's, it requires `eslint` and `eslint-plugin-import`, but also
`babel-eslint` for some ES6+ features that ESLint doesn't natively know about yet. To use, add `"extends": "ascribe"` to your ESLint configuration:

```json
{
  "extends": "ascribe"
}
```

### eslint-config-ascribe/es5

Same as the full configuration, except with all ES6 features turned off and uses ESLint's default
parser.

To use:

* Add `"extends": "ascribe/es5"` to your ESLint configuration:

```json
{
  "extends": "ascribe/es5"
}
```

## npm releases

Since this package is part of our styleguide repo, automating npm releases is tricky (can't have multiple Git tags in one repo etc.).

So for now it's all manual. Make sure to actually publish the respective package folder, not the whole repo by going into the package folder first:

```bash
cd packages/eslint-config-ascribe

# update version number in package.json, then:
git commit -am "Release 3.0.2"
npm publish
```
