var webpack = require("webpack");
var path = require("path");

var JSX = path.resolve(__dirname, "dev/jsx");
var SCSS = path.resolve(__dirname, "dev/SCSS");

var OUTPUT = path.resolve(__dirname, "output");

var config = {
	entry: JSX + "/index.jsx",
	output: {
		path: OUTPUT,
		filename: "prod.js"
	},
    module: {
        loaders: [
            {
                include: SCSS,
                // test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            },
            {
                include: JSX,
                // test: /\.jsx$/,
                loader: "babel",
            }
        ]
    },
    plugins: [
	    new webpack.DefinePlugin({
			'process.env':{
	        	'NODE_ENV': JSON.stringify('production') //tells react to use the production version
	      	}
	    }),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.optimize.AggressiveMergingPlugin()
    ]
};
 
module.exports = config;