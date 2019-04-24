const path = require('path');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.config.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = Merge(CommonConfig, {
    output: {
        path: path.join(__dirname, '../dist'), // Why '../dist' instead of 'dist'? It must be relative to webpack.config.js on root folder. It's kind of weird. 
        filename: 'bundle-[contenthash].js',
    },
    optimization: {
        minimize: true,
    },
    plugins: [new MiniCssExtractPlugin({ filename: 'styles-[contenthash].css' })],
});