const path = require('path');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const glob = require('glob')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = Merge(CommonConfig, {
    output: {
        path: path.join(__dirname, '../dist'), // Why '../dist' instead of 'dist'? It must be relative to webpack.config.js on root folder. It's kind of weird. 
        filename: 'bundle-[contenthash].js',
        publicPath: '/vanilla-page/' // This is a repo name on my GitHub. Delete it if you don't deploy to GitHub Pages. 
    },
    optimization: {
        splitChunks: { // Although there's not much JavaScript and CSS here, code-split it.
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.scss$/,
                    chunks: 'all',
                    enforce: true
                },
                commons: {
                    name: 'vendor',
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                },
            },
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]-[contenthash].css',
            chunkFilename: '[id]-[contenthash].css',
        }),
        new OptimizeCSSAssetsPlugin({
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {
                discardComments: {
                    removeAll: true,
                },
                // Run cssnano in safe mode to avoid
                // potentially unsafe transformations.
                safe: true,
            },
            canPrint: false,
        }),
        new PurgecssPlugin({
            paths: glob.sync(`${path.join(__dirname, '../src')}/**/*`, { nodir: true }),
        }),
        new MinifyPlugin(),
    ],
});