const path = require('path');
const webpack = require('webpack');

module.exports = {
	target: 'web',
	entry: {
		'main': './src/main.js'
	},
	output: {
		path: path.resolve('./build'),
		filename: '[name].js'
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: (module) => module.context && module.context.indexOf('src/') !== -1
		})
	]
};
