const webpack = require('webpack');
const { resolve } = require('path');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./base.js');

module.exports = function () {
  return webpackMerge(commonConfig(), {
    entry: [
      'react-hot-loader/patch',
      // activate HMR for React, should be first

      'webpack-dev-server/client?http://localhost:8080',
      // bundle the client for webpack-dev-server
      // and connect to the provided endpoint

      'webpack/hot/only-dev-server',
      // bundle the client for hot reloading
      // only- means to only hot reload for successful updates

      './index.js',
      // the entry point of our app
    ],
    devtool: 'source-map',
    devServer: {
      hot: true,
      // enable HMR on the server

      contentBase: resolve(__dirname, '../dist'),
      // match the output path

      publicPath: '/',
      // match the output `publicPath`

      historyApiFallback: true,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      // enable HMR globally

      new webpack.NamedModulesPlugin(),
      // prints more readable module names in the browser console on HMR updates
    ],
  });
};
