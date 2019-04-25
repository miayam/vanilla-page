const path = require('path');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = Merge(CommonConfig, {
    output: {
        path: path.join(__dirname, '../dev'), // Why '../dev' instead of 'dev'? It must be relative to webpack.config.js on root folder. It's kind of weird.
        filename: 'bundle.js',
    },
    plugins: [new MiniCssExtractPlugin({ filename: 'styles.css' })],
    devtool: 'inline-source-map', // It makes debugging JS with Chrome Dev Tools less painful. The compiled JS will map to our JS files.
});