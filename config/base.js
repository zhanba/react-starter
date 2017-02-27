const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

module.exports = function () {
  return {
    entry: [
      './index.js',
      // the entry point of our app
    ],
    output: {
      path: resolve(__dirname, '../dist'),
      filename: 'bundle.js',
      publicPath: '/',
      // sourceMapFilename: '[name].map'
    },
    context: resolve(__dirname, '../src'),
    resolve: {
      modules: [resolve(__dirname, '../src'), 'node_modules'],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            'babel-loader',
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader?modules',
            'postcss-loader',
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html', // Output file name.
        template: './index.html', // Use our HTML file as a template for the new one.
      }),
    ],
  };
};
