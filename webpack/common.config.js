const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const CopyPlugin = require("copy-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const plugins = [
  new CleanWebpackPlugin({
    verbose: false,
  }),
  new CopyPlugin({
    patterns: [{ from: "./public" }],
  }),
  new Dotenv({
    path: `./env/.env.${process.env.REACT_APP_ENV || "dev"}`,
    allowEmptyValues: true, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
    systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
    silent: false, // dont hide any errors
    defaults: false, // load '.env.defaults' as the default values if empty.
  }),
  
  new HtmlWebpackPlugin({
    filename: "index.html",
    template: "./src/index.html",
  }),
  // new WorkboxPlugin.GenerateSW({
  //   swDest: "service-worker.js",
  //   clientsClaim: true,
  //   skipWaiting: true,
  // }),
];

if (process.argv.indexOf("--analyze") !== -1) {
  plugins.push(new BundleAnalyzerPlugin());
}

module.exports = {
  entry: ["babel-polyfill", "./src/index.js"],
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "../build"),
    filename: "[name].[chunkhash:8].js",
    chunkFilename: "[id].[chunkhash:8].js",
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "..", "src", "assets"),
      components: path.resolve(__dirname, "..", "src", "components"),
      common: path.resolve(__dirname, "..", "src", "common"),
    },
    extensions: ["*", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?v=.+)?$/,
        loader: "file-loader",
        options: {
          appendTsSuffixTo: "?name=assets/[name].[contenthash].[ext]",
        },
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
    ],
  },
  plugins: plugins,
};
