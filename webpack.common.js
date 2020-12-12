/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const dotenv = require('dotenv');

// call dotenv and it will return an Object with a parsed key
const env = dotenv.config().parsed || {};

// Look for BKP_ environment variables and prepare them to be
// injected into the application via DefinePlugin in Webpack.
const BKP_ENV = /BKP_/i;
const bkpEnvs = Object.keys(process.env)
    .filter((key) => BKP_ENV.test(key))
    .reduce(
        (bkpenv, key) => {
            bkpenv[key] = process.env[key];
            return bkpenv;
        }, {}
    );

const combinedEnvs = { ...env, ...bkpEnvs };

const envKeys = Object.keys(combinedEnvs).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(combinedEnvs[next]);
    return prev;
}, {});

module.exports = {
    entry: {
        app: './src/index.tsx',
    },

    output: {
        filename: '[name].[hash].bundle.js',
        chunkFilename: '[name].[hash].bundle.js',
        publicPath: '/',
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss'],
    },

    plugins: [
        new webpack.DefinePlugin(envKeys),
    ],

    stats: {
        warningsFilter: [/Failed to parse source map/],
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
                options: {
                    configFile: 'tsconfig.json',
                },
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader',
            },
        ],
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
    },
};
