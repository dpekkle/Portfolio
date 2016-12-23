var webpack = require("webpack");
var path = require("path");

var DEV = path.resolve(__dirname, "dev");
var OUTPUT = path.resolve(__dirname, "output");

var config = {
	entry: DEV + "/index.jsx",
	output: {
		path: OUTPUT,
		filename: "prod.js"
	},
    module: {
        loaders: [{
            include: DEV,
            loader: "babel",
        }]
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