//URL: http://localhost:8080/webpack-dev-server/#

var webpack = require("webpack");
var path = require("path");

var directory = path.resolve(__dirname);
var JSX = path.resolve(__dirname, "dev/jsx");
var SCSS = path.resolve(__dirname, "dev/SCSS");
var OUTPUT = path.resolve(__dirname, "output/dev");

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
	//entry: JSX + "/index.jsx",
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		//'webpack/hot/only-dev-server',
		JSX + "/index.jsx"
	],
	output: {
		//path: OUTPUT,
		//filename: "dev.js"

		//webserver
		publicPath: 'http://localhost:8080/',
		filename: 'output/dev/dev.js'
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