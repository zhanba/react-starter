const webpack = require('webpack')
const { resolve } = require('path')
const webpackMerge = require('webpack-merge')
// const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
const commonConfig = require('./webpack.config.base')
const config = require('./config')
const util = require('./util')

module.exports = function () {
  return webpackMerge(commonConfig(), {
    entry: [
      'react-hot-loader/patch',
      // activate HMR for React, should be first!!

      'webpack-hot-middleware/client?timeout=2000&reload=true',
      // bundle the client for hot reloading

      './index.tsx'
      // the entry point of our app
    ],
    output: {
      path: config.path.outputPath,
      filename: 'bundle.js',
      publicPath: '/',
    },
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.less$/,
          exclude: /node_modules/, // exclude antd default style
          use: [
            util.loaders.styleLoader,
            util.loaders.TypingsLessModulesLoader,
            util.loaders.postcssLoader,
            util.loaders.lessLoader
          ]
        },
        {
          test: /\.less$/,
          include: /node_modules/, // parse antd style , no css modules option
          use: [
            util.loaders.styleLoader,
            util.loaders.cssLoader,
            util.loaders.postcssLoader,
            util.loaders.lessLoader
          ]
        }
      ]
    },
    devServer: {
      hot: true,
      // enable HMR on the server

      contentBase: resolve(__dirname, config.path.outputPath),
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

      // new HardSourceWebpackPlugin({
      //   // Either an absolute path or relative to webpack's options.context.
      //   cacheDirectory: resolve(config.path.rootPath, 'node_modules/.cache/hard-source/[confighash]'),
      //   // Either an absolute path or relative to webpack's options.context.
      //   // Sets webpack's recordsPath if not already set.
      //   recordsPath: resolve(config.path.rootPath, 'node_modules/.cache/hard-source/[confighash]/records.json'),
      //   // Either a string of object hash function given a webpack config.
      // })
    ],
  })
}
