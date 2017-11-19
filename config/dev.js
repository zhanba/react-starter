const webpack = require('webpack')
const { resolve } = require('path')
const webpackMerge = require('webpack-merge')
const commonConfig = require('./base.js')

module.exports = function () {
  return webpackMerge(commonConfig(), {
    entry: [
      'react-hot-loader/patch',
      // activate HMR for React, should be first!!

      'webpack-hot-middleware/client',
      // bundle the client for hot reloading

      './index.js'
      // the entry point of our app
    ],
    output: {
      path: resolve('dist'),
      filename: 'bundle.js',
      publicPath: '/',
    },
    devtool: 'eval',
    devServer: {
      hot: true,
      // enable HMR on the server

      contentBase: resolve(__dirname, '../dist'),
      // match the output path

      publicPath: '/',
      // match the output `publicPath`

      historyApiFallback: true,
      // for react router

      proxy: {
      }
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      // enable HMR globally

      new webpack.NamedModulesPlugin()
      // prints more readable module names in the browser console on HMR updates
    ],
  })
}
