/*
	npm i node-sass postcss-loader@3.0.0 postcss-preset-env sass-loader css-loader cssnano mini-css-extract-plugin cross-env file-loader npm-watch webpack webpack-cli copy-webpack-plugin -D
*/

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postcssPresetEnv = require("postcss-preset-env");
const CopyPlugin = require("copy-webpack-plugin");

const devMode = false;

module.exports = {
	mode: devMode ? "development" : "production",
	entry: ["./src/js/main.js", "./src/scss/site.scss"],

	output: {
		filename: "app.min.js",
		path: path.resolve(__dirname, "./assets/dist"),
		library: "mylib",
		libraryTarget: "var",
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
						loader: "css-loader",
						options: {
							importLoaders: 2,
						},
					},
					{
						loader: "postcss-loader",
						options: {
							ident: "postcss",
							plugins: devMode
								? () => []
								: () => [
										postcssPresetEnv({
											browsers: [">1%"],
										}),
										require("cssnano")(),
								  ],
						},
					},
					{
						loader: "sass-loader",
					},
				],
			},
			{
				test: /\.(png|jpe?g|gif)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							publicPath: "../images",
							emitFile: false,
						},
					},
				],
			},
		],
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: devMode ? "css/site.css" : "css/site.min.css",
		}),
		new CopyPlugin({
			patterns: [
				{
					from: "./node_modules/bootstrap/dist/css/bootstrap.min.css",
					to: "libs/bootstrap/css",
				},
				{
					from: "./node_modules/bootstrap/dist/js/bootstrap.min.js",
					to: "libs/bootstrap/js",
				},
				{
					from: "./node_modules/jquery/dist/jquery.min.js",
					to: "libs/jquery/jquery.min.js",
				},
				{
					from: "./node_modules/jquery/dist/jquery.slim.min.js",
					to: "libs/jquery/jquery.slim.min.js",
				},
				{
					from: "./node_modules/@popperjs/core/dist/umd/popper.js",
					to: "libs/popper/popper.js",
				},
				{
					from: "./node_modules/font-awesome/fonts",
					to: "libs/font-awesome",
				},
				{
					from:
						"./node_modules/font-awesome/css/font-awesome.min.css",
					to: "libs/font-awesome/css",
				},
				{
					from: "./node_modules/animate.css/animate.min.css",
					to: "libs/animate",
				},
				{
					from: "./node_modules/typed.js/lib/typed.min.js",
					to: "libs/typedjs",
				},
			],
		}),
	],

	// watchOptions: {
	//     aggregateTimeout: 200,
	//     poll: 1000,
	// },
};
