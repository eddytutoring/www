const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: 'babel-loader',
				exclude: ['/node_modules'],
			},
		],
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new UglifyJSPlugin(),
	],
});