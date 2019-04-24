const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/js/index.js',
    plugins: [
        new HtmlPlugin({
            template: './html/index.pug', // Use Pug templating language for better DX (Developer Experience). It is HTML on steroid.
        }),
    ],
    module: {
        rules: [
            {
                test: /.js$/, // Enable modern JavaScript (ES6).
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(sa|sc|c)ss$/, // Enable Sassy CSS because we need mixin and modular CSS. Vanilla CSS is very hard my friend. 
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'dev',
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/, // Load only 6 icons of FontAwesome fonts from local folder.
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            }
        ],
    },
    mode: 'none'
};