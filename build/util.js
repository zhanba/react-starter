const config = require('./config')

const styleLoader = {
  loader: 'style-loader' // creates style nodes from JS strings
}

const cssLoader = {
  loader: 'css-loader' // translates CSS into CommonJS
}

const cssModulesLoader = {
  loader: 'css-loader',
  options: {
    importLoaders: 2, // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
    modules: true,
  }
}
const TypingsCssModulesLoader = {
  loader: 'typings-for-css-modules-loader',
  options: {
    importLoaders: 2,
    modules: true,
    namedExport: true
  }
}

const postcssLoader = 'postcss-loader'

const lessLoader = {
  loader: 'less-loader',
  options: {
    modifyVars: config.themeVariables
  }
}

module.exports = {
  loaders: {
    styleLoader,
    cssLoader,
    cssModulesLoader,
    TypingsCssModulesLoader,
    postcssLoader,
    lessLoader
  }
}
