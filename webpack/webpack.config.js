const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const FileLoader = {
	loader: 'file-loader',
	options: {
		outputPath: './dist/'
	}
};

module.exports = function (env) {

	if (env.production)
		env.mode = 'production';
	else if (env.development)
		env.mode = 'development';
	else if (process.env.NODE_ENV)
		env.mode = process.env.NODE_ENV;

	return {
		mode: env.mode,
		watch: (env.mode == 'development'),
		devtool: (env.mode == 'development' ? 'eval-source-map' : 'source-map'),
		entry: {
			main: './assets/main.entry.js'
		},
		output: {
			filename: '[name].min.js',
			path: path.resolve(__dirname, 'dist')
		},
		module: {
			rules: [
				{
					test: /\.vue$/,
					loader: 'vue-loader'
      			},
				{
					test: /\.css$/,
					use: [
						MiniCssExtractPlugin.loader,
						'css-loader'
					]
				},
				{
					test: /\.s[a|c]ss$/,
					use: [
						MiniCssExtractPlugin.loader,
						'css-loader',
						'sass-loader'
					]
				},
				{
					test: /\.(png|jpeg|jpg|gif)$/,
					use: FileLoader
				},
				{
					test: /\.woff(2)?(\?v=[0-9]\.[0-9]+\.[0-9]+)?$/,
					use: {
						loader: 'url-loader',
						options: {
							limit: 4096,
							mimetype: 'application/font-woff',
							outputPath: './dist/'
						}
					}
				},
				{
					test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]+\.[0-9]+)?$/,
					use: FileLoader
				}
			]
		},
		resolve: {
			extensions: ['.js', '.vue', '.json'],
			alias: {
				'~': path.resolve('./assets/'),
				'vue$': 'vue/dist/vue.esm.js'
			}
		},
		plugins: [
			new VueLoaderPlugin(),
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery'
			}),
			new MiniCssExtractPlugin({
				filename: './[name].min.css',
				chunkFilename: './[name].min.css'
			})
        ],
		optimization: {
			splitChunks: {
				chunks: 'all'
			}
		}
	}
};
