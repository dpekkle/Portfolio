var webpack = require("webpack");
var path = require("path");

var JSX = path.resolve(__dirname, "dev/jsx");
var SCSS = path.resolve(__dirname, "dev/SCSS");

var OUTPUT = path.resolve(__dirname, "output");

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
	entry: JSX + "/index.jsx",
	output: {
		path: OUTPUT,
		filename: "dev.js"
	},
    devtool: 'source-map', 
    module: {
        loaders: [
            {
                include: SCSS,
                // test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                include: JSX,
                // test: /\.jsx$/,
                loader: "babel",
            }
        ]
    }
};
 
module.exports = config;