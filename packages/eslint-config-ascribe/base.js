module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 7,
        sourceType: 'module',
    },
    globals: {
        // Disable overwriting for commonly used polyfills
        'fetch': false,
        'Promise': false,

        // Use process for environment variables (ie. NODE_ENV)
        'process': false,
    }
};
