const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = function () {
    return {
        entry: './client/main.js',
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                query: {
                                    modules: true
                                }
                            }
                        ],
                    }),
                },
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                query: {
                                    modules: true,
                                    sourceMap: false,
                                    importLoaders: 2,
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    ident: 'postcss',
                                    plugins: [
                                        autoprefixer({
                                            browsers:['ie >= 9', 'last 4 version']
                                        })
                                    ],
                                }
                            },
                            'sass-loader'
                        ],
                    }),
                }
            ],
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    sequences: true,
                    booleans: true,
                    loops: true,
                    unused: true,
                    warnings: false,
                    drop_console: true,
                    unsafe: true
                }
            }),
            new ExtractTextPlugin('./css/[name].css'),
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorOptions: { discardComments: {removeAll: true } },
                canPrint: true
            })
        ]
    }
};