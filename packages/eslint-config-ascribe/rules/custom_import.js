// Export import plugin overrides against default Airbnb's
module.exports = {

    /**
     * Import rules
     * https://github.com/benmosher/eslint-plugin-import#rules
     */

    // Ensure imports point to files/modules that can be resolved
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    'import/no-unresolved': [2, { 'commonjs': true }],

    // Ensure named imports coupled with named exports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md#when-not-to-use-it
    'import/named': 2,

    // Ensure default import coupled with default export
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md#when-not-to-use-it
    'import/default': 2,

    // Ensure imports come first to avoid hoisting issues
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/imports-first.md
    'import/imports-first': 2,

    // Disallow namespace (wildcard) imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
    'import/no-namespace': 2,

    // Disallow default import name from matching a named export
    'import/no-named-as-default': 2,

    // Forbid the use of packages not found in package.json
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': [2, { 'devDependencies': false, 'optionalDependencies': false }],

    // Enforce imports to not specify a trailing .js extension
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': [2, { 'js': 'never' }],

    // Enforce module import order: builtin -> external -> internal
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'import/order': [2, {
        'groups': ['builtin', 'external', ['internal', 'parent', 'sibling', 'index']]
    }],

    // Require a newline after the last import/require in a group
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
    'import/newline-after-import': 2,

    // Require modules with a single export to use a default export
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 2,

};
