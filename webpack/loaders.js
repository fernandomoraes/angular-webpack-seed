module.exports = function ({ isProd, srcFolder }) {
	return [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		},
		{
			test: /\.html$/,
			exclude: [ /\inline\.html$/, /(index|about)\.template\.html$/ ],
			use: [
				{ loader: 'file-loader', options: { name: '[path][name].[ext]', context: srcFolder } },
				{ loader: 'extract-loader' },
				{ loader: 'html-loader' }
			]
		},
		{
			test: /\inline\.html$/,
			loader: 'html-loader'
		}
	];
};