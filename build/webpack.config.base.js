const config = require('./config')
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const tsImportPluginFactory = require('ts-import-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin')

module.exports = function () {
  return {
    context: config.path.srcPath,
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      modules: [config.path.srcPath, 'node_modules'],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'eslint-loader',
          enforce: 'pre',
          include: [config.path.srcPath, config.path.testPath],
          options: {
            formatter: require('eslint-friendly-formatter')
          }
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          loader: 'source-map-loader'
        },
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            },
          },
          exclude: /(node_modules|dist)/,
        },
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            getCustomTransformers: () => ({
              before: [ tsImportPluginFactory({
                libraryName: 'antd',
                libraryDirectory: 'lib',
                style: true
              })]
            })
          },
          exclude: /node_modules/
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'img/[name].[hash:7].[ext]'
          }
        },
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'media/[name].[hash:7].[ext]'
          }
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'fonts/[name].[hash:7].[ext]'
          }
        }
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html', // Output file name.
        favicon: './assets/favicon.ico',
        template: './assets/index.html', // Use our HTML file as a template for the new one.
        inject: true
      }),
      new ForkTsCheckerWebpackPlugin({
        tsconfig: resolve(config.path.rootPath, './tsconfig.json'),
        tslint: resolve(config.path.rootPath, './tslint.json'),
        watch: resolve(config.path.srcPath)
      }),
      new ForkTsCheckerNotifierWebpackPlugin()
    ],
  }
}
