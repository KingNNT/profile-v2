/*
	npm i node-sass postcss-loader@3.0.0 postcss-preset-env sass-loader css-loader cssnano mini-css-extract-plugin cross-env file-loader npm-watch webpack webpack-cli copy-webpack-plugin -D
*/

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const CopyPlugin = require('copy-webpack-plugin');

const devMode = false;

module.exports = {
	mode: devMode ? 'development' : 'production',
	entry: [
		'./src/js/app.js',
		'./src/scss/site.scss',
	],

	output: {
		filename: 'app.min.js',
		path: path.resolve(__dirname, 'dist'),
		library: 'mylib',
		libraryTarget: 'var',
	},

	module: {
		rules: [
			{
				test: /\.(sa|sc)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: devMode
								? () => []
								: () => [
									  postcssPresetEnv({
										  browsers: ['>1%'],
									  }),
									  require('cssnano')(),
								  ],
						},
					},
					{
						loader: 'sass-loader',
					},
				],
			},
			{
				test: /\.(png|jpe?g|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							publicPath: '../images',
							emitFile: false,
						},
					},
				],
			},
		],
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: devMode ? 'css/site.css' : 'css/site.min.css',
		}),
		new CopyPlugin({
			patterns: [
				{
					from: '',
					to: '',
				},
			],
		}),
	],

	// watchOptions: {
	//     aggregateTimeout: 200,
	//     poll: 1000,
	// },
};