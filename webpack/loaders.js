module.exports = function ({ isProd }) {
	return [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}
	];
};