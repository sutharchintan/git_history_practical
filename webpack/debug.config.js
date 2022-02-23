const { merge } = require("webpack-merge");
const commonConfig = require("./common.config");

module.exports = merge(commonConfig, {
  mode: "development",
  devtool: "source-map",
  devServer: {    
    compress: true,
    port: 3090,
    historyApiFallback: true,
    hot: true,
  },
});
