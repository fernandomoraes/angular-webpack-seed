const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = ({ isProd, assetsFolder }) => {
	return new ExtractTextPlugin({
		filename: 'assets/css/[name].[chunkhash].css',
		disable: !isProd,
		allChunks: true
	});
};