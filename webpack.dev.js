const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	devtool: "cheap-module-source-map",
	devServer: {
		contentBase: path.resolve(__dirname, "dist"),
		publicPath: "",
		hot: true,
		port: 9000,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: ['react-hot-loader/webpack', 'babel-loader'],
				exclude: ['/node_modules'],
			},
		],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('development')
			}
		}),
	],
});