const Webpack = require('webpack');
const WebpackDevServer = require("webpack-dev-server");

//const autoprefixer = require('autoprefixer');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const path = require('path');


module.exports = {
  	entry: {
		'kernel': './index.js',
		'test': './demo/test.js'

	},
  	output: {
		path: './dist',
		filename: '[name].js',
		publicPath: "/dist",
		libraryTarget: "umd"
	},
	module: {
		loaders: [
	    	{
		        test: /.js?$/,
		        loader: 'babel-loader',
		        exclude: /node_modules/,
		        query: {
		          	presets: ['es2015']
		        }
	      	}
	    ]
  	},
	devtool: 'source-map'
};



