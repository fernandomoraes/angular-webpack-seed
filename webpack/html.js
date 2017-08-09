const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function ({ pages, isProd }) {

	const base = {
		minify: {
			collapseWhitespace: isProd
		}
	};

	const htmls = Object.keys(pages).map(key => {
		return new HtmlWebpackPlugin(Object.assign(pages[key], base));
	});

	return {
		addInPlugins: plugins => Object.keys(htmls).forEach(key => plugins.push(htmls[key]))
	};
};