const path = require('path');
const isProd = false;
const srcFolder = 'src';

const config = {
	entry: {
		index: path.resolve(__dirname, srcFolder, 'main', 'index.js'),
		about: path.resolve(__dirname, srcFolder, 'about', 'about.js')
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: isProd ? '[name].[chunkhash].js' : '[name].js'
	},
	plugins: [],
	module: {
		loaders: require('./webpack/loaders')({ isProd, srcFolder })
	}
};

const commonsChunk = require('./webpack/commons-chunk')({ entry: config.entry });
const commonsChunkNames = commonsChunk.getChunksNames();

const pages = {
	index: {
		template: path.resolve(__dirname, srcFolder, 'main', 'index.template.html'),
		filename: 'index.html',
		chunks: commonsChunkNames.concat('index')
	},
	about: {
		template: path.resolve(__dirname, srcFolder, 'about', 'about.template.html'),
		filename: 'about.html',
		chunks: commonsChunkNames.concat('about')
	}
};

const htmls = require('./webpack/html')({ isProd, pages });

commonsChunk.addInPlugins(config.plugins);
htmls.addInPlugins(config.plugins);

module.exports = config;