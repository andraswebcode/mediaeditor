const path = require('path');

module.exports = (env) => {
	const { production } = env;
	const minSfx = production ? '.min' : '';

	return {
		mode: production ? 'production' : 'development',
		entry: './src/index.ts',
		output: {
			filename: `mediaeditor${minSfx}.js`,
			path: path.resolve(__dirname, 'dist'),
			publicPath: '/dist/',
			library: 'mediaeditor',
			libraryTarget: 'umd',
			globalObject: 'window'
		},
		devServer: {
			static: {
				directory: path.join(__dirname, 'public')
			},
			compress: true,
			port: 9000
		},
		devtool: false,
		module: {
			rules: [
				{
					test: /\.ts$/,
					use: 'ts-loader',
					exclude: /node_modules/
				}
			]
		},
		resolve: {
			extensions: ['.ts', '.js']
		}
	};
};
