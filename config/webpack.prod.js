const path = require('path');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const glob = require('glob')
const PurgecssPlugin = require('purgecss-webpack-plugin')

const PATHS = {
    src: path.join(__dirname, '../src')
}

module.exports = Merge(CommonConfig, {
    output: {
        path: path.join(__dirname, '../dist'), // Why '../dist' instead of 'dist'? It must be relative to webpack.config.js on root folder. It's kind of weird. 
        filename: 'bundle-[contenthash].js',
    },
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
        splitChunks: {
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
                    enforce: true
                },
            },
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]-[contenthash].css',
            chunkFilename: '[id]-[contenthash].css',
        }),
        new PurgecssPlugin({
            paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
        })
    ],
});