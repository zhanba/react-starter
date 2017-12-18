const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = function () {
  return {
    context: resolve('src'),
    resolve: {
      modules: [resolve('src'), 'node_modules'],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'eslint-loader',
          enforce: 'pre',
          include: [resolve('src'), resolve('test')],
          options: {
            formatter: require('eslint-friendly-formatter')
          }
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
          test: /\.css$/,
          include: [resolve('src/assets')], // use css modules in src/component directory
          use: [
            'style-loader',
            'css-loader'
          ]
        }
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html', // Output file name.
        favicon: './assets/favicon.ico',
        template: './assets/index.html', // Use our HTML file as a template for the new one.
        inject: true
      })
    ],
  }
}
