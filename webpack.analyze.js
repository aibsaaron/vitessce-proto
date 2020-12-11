/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */
/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');

const analyzeConfig = {
    plugins: [
        new BundleAnalyzerPlugin(),
    ],
};

module.exports = (env) => {
    // Use env.<YOUR VARIABLE> here:
    console.log('Analyzing: ', env.analyze);

    return merge(
        env.analyze === 'prod' ? prodConfig : devConfig,
        analyzeConfig
    );
};
