const BundleAnalyzerPlugin =
	require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
	mode: 'production',
	devtool: 'source-map',
	plugins: [
		new BundleAnalyzerPlugin({
			analyzerPort: '8889',
		}),
	],
	performance: {
		hints: 'warning', // 枚举
		maxAssetSize: 30000000, // 整数类型（以字节为单位）
		maxEntrypointSize: 50000000, // 整数类型（以字节为单位）
		assetFilter: function (assetFilename) {
			// 提供资源文件名的断言函数
			return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
		},
	},
};
