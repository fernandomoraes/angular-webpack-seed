const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const bootstrapEntryPoints = require('./webpack/bootstrap');

const isProd = false;
const srcFolder = 'src';
const assetsFolder = 'assets';

const config = {
    entry: {
        index: path.resolve(__dirname, srcFolder, 'main', 'index.js'),
        about: path.resolve(__dirname, srcFolder, 'about', 'about.js'),
        bootstrap: isProd ? bootstrapEntryPoints.prod : bootstrapEntryPoints.dev
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: assetsFolder.concat(isProd ? '/js/[name].[chunkhash].js' : '/js/[name].js')
    },
    plugins: [
        new CleanWebpackPlugin(['dist'])
    ],
    module: {
        loaders: require('./webpack/loaders')({ isProd, srcFolder, assetsFolder })
    }
};

const commonsChunk = require('./webpack/commons-chunk')({ entry: config.entry });
const commonsChunkNames = commonsChunk.getChunksNames().concat('bootstrap');

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
const extractTextPlugin = require('./webpack/extract-text-plugin')({ isProd, assetsFolder });

commonsChunk.addInPlugins(config.plugins);
htmls.addInPlugins(config.plugins);

config.plugins.push(extractTextPlugin);

module.exports = config;