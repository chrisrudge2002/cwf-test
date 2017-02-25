module.exports = {
	resolve: {
		root: __dirname,
		modulesDirectories: [
			'node_modules',
			'app',
		],
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{ test: /\.jsx$/, loader: 'babel-loader' }
		],
		postLoaders: [
			{
				test: /\.jsx$/,
				exclude: /\.test.jsx$/,
				loader: 'istanbul-instrumenter'
			}
		]
	},
	devtool: 'inline-source-map'
};
