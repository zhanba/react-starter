const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const commonConfig = require('./webpack.config.base')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const config = require('./config')
const util = require('./util')

const extractLess = new ExtractTextPlugin({
  filename: 'css/[name].[contenthash].css',
  allChunks: true,
  disable: process.env.NODE_ENV === 'development'
})

module.exports = function () {
  return webpackMerge(commonConfig(), {
    entry: {
      app: './index.tsx',
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
        'prop-types',
        'react-konva',
        'konva'
      ]
    },
    output: {
      path: config.path.outputPath,
      filename: 'js/[name].[chunkhash].js',
      publicPath: config.path.publicPath
    },
    module: {
      rules: [
        {
          test: /\.less$/,
          exclude: /node_modules/, // exclude antd default style
          use: extractLess.extract({
            use: [
              util.loaders.TypingsLessModulesLoader,
              util.loaders.postcssLoader,
              util.loaders.lessLoader
            ]
          })
        },
        {
          test: /\.less$/,
          include: /node_modules/, // exclude antd default style
          use: extractLess.extract({
            use: [
              util.loaders.cssLoader,
              util.loaders.postcssLoader,
              util.loaders.lessLoader
            ]
          })
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin([config.path.outputPath], {
        root: config.path.rootPath,
        verbose: true, // Write logs to console.
        allowExternal: false
      }),
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
      extractLess,
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
