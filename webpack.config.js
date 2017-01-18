var webpack = require("webpack");
var path = require("path");

var directory = path.resolve(__dirname);
var JSX = path.resolve(__dirname, "dev/jsx");
var SCSS = path.resolve(__dirname, "dev/SCSS");
var OUTPUT = path.resolve(__dirname, "output/dev");

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
	//entry: JSX + "/index.jsx",
	// devServer: {
	// 	//hack to work with react-router https://stackoverflow.com/questions/26203725/how-to-allow-for-webpack-dev-server-to-allow-entry-points-from-react-router
	// 	proxy: { 
	// 		'/**': {//catch all requests
	// 			target: '/index.html',//default target
	// 			secure: false,
	// 			bypass: function(req, res, opt){
	// 				//your custom code to check for any exceptions
	// 				//console.log('bypass check', {req: req, res:res, opt: opt});
	// 				if(req.path.indexOf('/img/') !== -1 || req.path.indexOf('/public/') !== -1){
	// 					return '/'
	// 				}

	// 				if (req.headers.accept.indexOf('html') !== -1) {
	// 					return '/index.html';
	// 				}
	// 			}
	// 		}
	// 	}
	// },
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