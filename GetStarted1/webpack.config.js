var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: {
        bundle: "./js/entry.js",
        bundle2: "./js/entry2.js"
    },
    output: {
        path : "public/",
        filename: "[name].js"
    },
    module : {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.(png|jpg)$/,
                loader: "url-loader?limit=1024"
            }
        ]
    }
    ,plugins: [
        new uglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
        ,new HtmlwebpackPlugin({
            title : 'CHANGE ME!!!',
            filename : 'index.html'
        })
    ]
};