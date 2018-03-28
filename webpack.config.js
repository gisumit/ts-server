const path = require('path');
const TSLintPlugin = require('tslint-webpack-plugin');

module.exports = env => {

	const environment = env.NODE_ENV;

	return {
		entry: './src/server.ts',
		mode: environment,

		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: '/node_modules/'
				}
			]
		},

		plugins: [
			new TSLintPlugin({
				files: ['./src/**/*.ts'],
				typeCheck: true,
				fix: true,
			})
		],

		resolve: {
			extensions: ['.ts', 'js']
		},

		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'server.bundle.js'
		}
	}
}