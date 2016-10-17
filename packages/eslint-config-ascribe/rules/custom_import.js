// Export import plugin overrides against default Airbnb's
module.exports = {

    /**
     * Import rules
     * https://github.com/benmosher/eslint-plugin-import#rules
     */

    // Ensure named imports coupled with named exports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md#when-not-to-use-it
    'import/named': 2,

    // Ensure default import coupled with default export
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md#when-not-to-use-it
    'import/default': 2,

    // Disallow namespace (wildcard) imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
    'import/no-namespace': 2,

    // Enforce imports to not specify a trailing .js extension
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': [2, { 'js': 'never' }],

    // Enforce module import order: builtin -> external -> internal
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'import/order': [2, {
        'groups': ['builtin', 'external', ['internal', 'parent', 'sibling', 'index']]
    }],

};
