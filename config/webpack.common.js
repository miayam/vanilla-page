const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/js/index.js',
    plugins: [
        new HtmlPlugin({
            template: './src/html/index.pug', // Use Pug templating language for better DX (Developer Experience). It is HTML on steroid.
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
                test: /\.pug$/, // Compile pug files to html.
                use: ["pug-loader"]
            },
            {
                test: /\.(sa|sc|c)ss$/, // Enable Sassy CSS because we need mixin and stuff. Vanilla CSS is very hard my friend. 
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'dev',
                            minimize: process.env.NODE_ENV === "prod"
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
            },
            {
                test: /\.(jpg|png)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name]-[hash].[ext]",
                        outputPath: 'images/'
                    },
                }
            }
        ],
    },
    mode: 'none'
};