const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: './src/js/index.js',
		vendor: ['moment', 'lodash']
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: '[name].[chunkhash].js',
		chunkFilename: '[name].[chunkhash].js',
		publicPath: '',
	},
	devtool: "eval-source-map",
	devServer: {
		publicPath: "/dist/",
		compress: true,
		port: 9000
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				options: {
					presets: [
						['env', { targets: { node: 'current' }, modules: false }]
					]
				},
				exclude: ['/node_modules'],
			},
			{
				test: /\.scss?$/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			}

		],
	},
	plugins: [
		new ExtractTextPlugin('styles.css'),
		new webpack.optimize.CommonsChunkPlugin({
			name: ['vendor', 'manifest'],
			fileName: '[name].[chunkhash]'
		}),
		new ManifestPlugin({
			fileName: 'manifest.json',
			basePath: './dist/'
		}),
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			template: './src/index.html',
		})
	],
	resolve: {
		/*alias: {
			Vendor: path.resolve(__dirname, 'dist/vendor.js')
		},*/
		modules: ['node_modules'],
		extensions: ['.js', '.json', '.jsx', '.css'],
	},
};