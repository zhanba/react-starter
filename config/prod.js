const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const { resolve } = require('path')
const commonConfig = require('./base.js')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

module.exports = function () {
  return webpackMerge(commonConfig(), {
    entry: {
      app: './index.js',
      vendor: [
        'react',
        'react-dom',
        'react-redux',
        'react-router',
        'history',
        'react-router-dom',
        'redux',
        'redux-thunk',
        'axios',
        'prop-types'
      ]
    },
    output: {
      path: resolve('dist'),
      filename: 'js/[name].[chunkhash].js',
      publicPath: '/'
    },
    plugins: [
      new CleanWebpackPlugin(['../dist']),
      new webpack.optimize.ModuleConcatenationPlugin(), // Scope Hoisting
      new webpack.HashedModuleIdsPlugin(), // keep vendor chunk hash stable, useful for cache
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity // keep only vendor in chunk
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest'
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
          screw_ie8: true,
          keep_fnames: true
        },
        compress: {
          screw_ie8: true
        },
        comments: false
      }),
      new BundleAnalyzerPlugin()
    ]
  })
}
