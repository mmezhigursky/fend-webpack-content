const path = require('path') 
const webpack = require('webpack')
const HtmlWebPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/client/index.js',
    module: {
        rules: [
                {
            test: '/\.js$/',
            exclude: /node_modules/,
            loader: "babel-loader"
                }
        ]
},

    plugins: [
        new  HtmlWebPlugin({
        template: "./src/client/views/index.html",
        filename: "./index.html"
        })
    ]
}
