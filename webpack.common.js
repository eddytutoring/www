const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: './src/js/index.js',
		//vendor: ['moment', 'lodash']
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: '[name].js',
		publicPath: '',
	},
	module: {
		rules: [
			{
				test: /\.scss?$/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader'],
				})
			}
		],
	},
	resolve: {
		/*alias: {
			Vendor: path.resolve(__dirname, 'dist/vendor.js')
		},*/
		modules: ['node_modules'],
		extensions: ['.js', '.json', '.jsx', '.css'],
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: ['vendor', 'manifest'],
		}),
		new ManifestPlugin({
			fileName: 'manifest.json',
			basePath: './dist/'
		}),
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			title: process.env.NODE_ENV === 'production' ? "tutoring" : "development"
		}),
		new ExtractTextPlugin({
			filename: "styles.css",
			disable: process.env.NODE_ENV === 'production' ? false: true
		}),
	],
};