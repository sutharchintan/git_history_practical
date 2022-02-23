const { merge } = require('webpack-merge');
const commonConfig = require('./common.config');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(commonConfig, {
	mode: "production",
	optimization: {
	  minimizer: [
		new TerserPlugin(),
	  ],
	  minimize: true,
	  removeEmptyChunks: false,
	  usedExports: true,
	  splitChunks: {
		cacheGroups: {
		  default: false,
		},
		chunks: "all",
	  },
	},
	plugins: [
	  new CopyPlugin({
		patterns: [{ from: "server.js" }],
	  }),
	],
});
