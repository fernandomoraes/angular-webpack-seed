const webpack = require('webpack');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;


module.exports = function ({ entry }) {

	const chunks = {
		commons: new CommonsChunkPlugin({
			name: 'commons'
		}),
		vendors: new CommonsChunkPlugin({
			name: 'vendors',
			chunks: Object.keys(entry).concat('commons'),
			minChunks: ({ resource }) => /node_modules/.test(resource)
		}),
		manifest: new CommonsChunkPlugin({
			name: 'manifest',
			minChunks: Infinity
		})
	};

	return {
		getChunks: () => chunks,
		addInPlugins: plugins => Object.keys(chunks).forEach(key => plugins.push(chunks[key])),
		getChunksNames: () => Object.keys(chunks).map(key => chunks[key].chunkNames[0])
	};
};

