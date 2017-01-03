const Webpack = require('webpack');
const WebpackDevServer = require("webpack-dev-server");

//const autoprefixer = require('autoprefixer');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const path = require('path');


module.exports = {
	entry: {
		'kernel': ['babel-polyfill', './index.js'],
		'test': ['babel-polyfill', './demo/test.js']

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
		],
		postLoaders: [
			{
				test: [/\.js$/],
				exclude: /node_modules/,
				loader: 'documentation'
			}
		]
	},
	documentation: {
		entry: './src/*.js',
		github: true,
		format: 'html',
		output: './documentation/js'
	},
	devtool: 'source-map'
};



