const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const devConfig = require('./webpack/dev.config');
const productionConfig = require('./webpack/build.config');


const SRC_PATH = path.join(__dirname, 'client');


const commonConfig = merge([
    {
        entry: [
            'react-hot-loader/patch',
            './client/main.js'
        ],
        output: {
            path: path.join(__dirname, 'public'),
            filename: "js/[name].js"
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: [{
                        loader: "babel-loader"
                    }]
                },
                {
                    test: /\.(jpg|png|svg)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'images/[name]-[hash:base64:5].[ext]'
                            }
                        }
                    ]
                }
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['main', 'common'],
                template: SRC_PATH + '/index.html'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common'
            })
        ]
    }
]);

module.exports = function (env) {
    if(env === 'dev') {
        return merge([
            commonConfig,
            devConfig()
        ]);
    }
    else if(env === 'production') {
        return merge([
            commonConfig,
            productionConfig()
        ])
    }
};