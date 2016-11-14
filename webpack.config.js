var path = require('path');
var Webpack = require('webpack');
var WebpackDevServer = require("webpack-dev-server");

module.exports = {
  entry: {
  	'kernel': './index.js'
  },
  output: {
		path: './dist',
		filename: '[name].js',
		publicPath: "/dist/",
    libraryTarget: 'commonjs2'
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
  }
};
