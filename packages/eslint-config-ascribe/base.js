module.exports = {
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 2017,
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
