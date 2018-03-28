const path = require('path');

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

		resolve: {
			extensions: ['.ts', 'js']
		},

		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'server.bundle.js'
		}
	}
}