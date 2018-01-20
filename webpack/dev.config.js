const autoprefixer = require('autoprefixer');

module.exports = function () {
    return {
        devtool: "source-map",
        devServer: {
            contentBase: __dirname + 'client',
            historyApiFallback: true,
            open: true
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            query: {
                                modules: true,
                                localIdentName: '[name]__[local]___[hash:base64:5]'
                            }
                        }
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            query: {
                                modules: true,
                                sourceMap: true,
                                importLoaders: 2,
                                localIdentName: '[name]__[local]___[hash:base64:5]'
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
                                sourceMap: true
                            }
                        },
                        'sass-loader'
                    ]
                },
            ]
        }
    }
};