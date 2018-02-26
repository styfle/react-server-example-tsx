const nodeExternals = require('webpack-node-externals');

module.exports = [
    {
        entry: {
            browser: './src/browser.tsx',
        },
        output: {
            path: __dirname + '/dist',
            filename: '[name].js',
        },
        // Currently we need to add '.ts' to the resolve.extensions array.
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },

        // Source maps support ('inline-source-map' also works)
        devtool: 'source-map',

        // Add the loader for .ts files.
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                },
            ],
        },
        externals: {
            react: 'React',
            'react-dom': 'ReactDOM',
        },
    },
    {
        entry: {
            server: './src/server.tsx',
        },
        output: {
            path: __dirname + '/dist',
            filename: '[name].js',
        },
        // Currently we need to add '.ts' to the resolve.extensions array.
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },

        // Source maps support ('inline-source-map' also works)
        devtool: 'source-map',

        // Add the loader for .ts files.
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                },
            ],
        },
        target: 'node',
        externals: [nodeExternals()],
    },
];
