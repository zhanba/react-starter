const config = require('./config')
const tsImportPluginFactory = require('ts-import-plugin')

const babelLoader = {
  loader: 'babel-loader',
  options: {
    cacheDirectory: true
  },
}

const tsLoader = {
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
}

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

const TypingsLessModulesLoader = {
  loader: 'typings-for-css-modules-loader',
  options: {
    importLoaders: 2,
    modules: true,
    namedExport: true,
    camelCase: true,
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
    babelLoader,
    tsLoader,
    styleLoader,
    cssLoader,
    cssModulesLoader,
    TypingsLessModulesLoader,
    postcssLoader,
    lessLoader
  }
}