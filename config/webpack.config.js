const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry : {
        app: './app/app.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: [ 'file-loader' ]
        }, {
            test: /\.(js|jsx)$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './app/index.html' }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
     ],
     devServer: {
        hot: true,
        historyApiFallback: true,
    },
    output: {
        filename: '[name].[id].js',
        chunkFilename: '[name].[id].js',
        publicPath: '/',
    },
    resolve: {
        modules: [
            path.resolve('./app'),
            path.resolve('./node_modules'),
        ],
    },
}