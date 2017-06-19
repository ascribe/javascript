// Export ES6 rule overrides against default Airbnb's
module.exports = {

    /**
     * Possible Errors
     * http://eslint.org/docs/rus/#possible-errors
     */

    // Allow dangling commas for multiline arrays and objects
    // http://eslint.org/docs/rules/comma-dangle
    'comma-dangle': [1, 'only-multiline'],

    // Warn against use of console for non-error logging
    // http://eslint.org/docs/rules/no-console
    'no-console': [1, { 'allow': ['error'] }],

    // Allow use of Object.prototypes builtins directly
    // http://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': [0],


    /**
     * Best Practices
     * http://eslint.org/docs/rules/#best-practices
     */

    // Allow else clauses after an if with a return
    // http://eslint.org/docs/rules/no-else-return
    'no-else-return': [0],

    // Disallow reassignment of function parameters (but allow assigning to parameter's properties)
    // http://eslint.org/docs/rules/no-param-reassign.html
    'no-param-reassign': [2, { props: false }],


    /**
     * Variables
     * http://eslint.org/docs/rules/#variables
     */

    // Disallow use of variables and classes before they are defined
    // http://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': [2, { "functions": false, "classes": true }],

    // Disallow declaration of variables that are not used in the code, unless they are prefixed by
    // `ignored` (useful for creating subset objects through destructuring and rest objects)
    // http://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': [2, {
        'vars': 'local',
        'args': 'after-used',
        'varsIgnorePattern': 'ignored.+'
    }],


    /**
     * Stylelistic Issues
     * (http://eslint.org/docs/rules/#stylistic-issues)
     */

    // Enforce 4-space indents, except for switch cases
    // http://eslint.org/docs/rules/indent
    'indent': [2, 4, { "SwitchCase": 1, "VariableDeclarator": 1 }],

    // Specify the maximum length of a code line to be 100
    // http://eslint.org/docs/rules/max-len
    'max-len': [2, {
        'code': 105, // Use 105 to give some leeway for *just* slightly longer lines when convienient
        'ignorePattern': '^(import|export) .* from .*$',
        'ignoreComments': false,
        'ignoreTrailingComments': true,
        'ignoreUrls': true
    }],

    // Require capitalization when using `new`, but don't require capitalized functions to be called
    // with new
    // http://eslint.org/docs/rules/new-cap
    'new-cap': [2, { 'newIsCap': true, 'capIsNew': false }],

    // Allow the continue statement
    // http://eslint.org/docs/rules/no-continue
    'no-continue': [0],

    // Disallow un-paren'd mixes of different operators if they're not of the same precendence
    // http://eslint.org/docs/rules/no-mixed-operators
    'no-mixed-operators': [2, {
      groups: [
        ['+', '-', '*', '/', '%', '**'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof']
      ],
      allowSamePrecedence: true
    }],

    // Allow use of unary increment/decrement operators
    // http://eslint.org/docs/rules/no-plusplus
    'no-plusplus': [0],

    // Always allow dangling underscores
    // http://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': [0],

    // Require unix-style line breaks
    // http://eslint.org/docs/rules/linebreak-style
    'linebreak-style': [2, 'unix'],

    // Require operators to always be at the end of a line, except for the ternary operator
    // http://eslint.org/docs/rules/operator-linebreak
    'operator-linebreak': [2, 'after', { 'overrides': { '?': 'ignore', ':': 'ignore' } }],

    // Require properties to be consistently quoted. Force numbers to be quoted, as they can have
    // weird behaviour during the coercion into a string)
    // http://eslint.org/docs/rules/quote-props
    'quote-props': [2, 'consistent', { 'keywords': false, 'unnecessary': true, 'numbers': true }],

    // Require spaces before parens for anonymous function declarations
    // http://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': [2, { 'anonymous': 'always', 'named': 'never' }],

    // Require a space immediately following the // or /* in a comment for most comments
    // http://eslint.org/docs/rules/spaced-comment
    'spaced-comment': [2, 'always', {
        'line': {
            'exceptions': ['-', '+']
        },
        'block': {
            'exceptions': ['*']
        }
    }],
    
    // We don't like semicolons so kill them
    // http://eslint.org/docs/rules/semi
    'semi': [2, 'never'],


    /**
     * ES6-specific Issues
     * (http://eslint.org/docs/rules/#ecmascript-6)
     */
    // Don't require parens in arrow function arguments
    // http://eslint.org/docs/rules/arrow-parens
    'arrow-parens': [0],

    // Ignore built-in import sorting for eslint-plugin-import's version
    // http://eslint.org/docs/rules/sort-imports
    'sort-imports': [0],
};
