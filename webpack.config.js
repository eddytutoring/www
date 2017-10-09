const webpack = require('webpack');
const path = require('path');

module.exports = {
	context: path.resolve(__dirname, "src"),
	entry: {
		app: ['./index.js', './foobar.js'],
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: '[name].js',
		publicPath: '/',
	},
	module: {
		rules: [{
			test: /\.jsx?$/,
			loader: 'babel-loader',
			options: {
				presets: [[
					'env', {
						targets: { node: 'current' }, // 노드일 경우만
						modules: false
				}]]
			},
			exclude: ['/node_modules'],
		}],
	},
	plugins: [],
	resolve: {
		modules: ['node_modules'],
		extensions: ['.js', '.json', '.jsx', '.css'],
	},
};