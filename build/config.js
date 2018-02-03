const { resolve } = require('path')
const fs = require('fs')
const lessToJs = require('less-vars-to-js')

function resolvePath(dir) {
  return resolve(__dirname, '..', dir)
}

const assetsPath = resolvePath('./src/assets')

// override antd theme
// https://medium.com/@GeoffMiller/how-to-customize-ant-design-with-react-webpack-the-missing-guide-c6430f2db10f
const themeVariables = lessToJs(
  fs.readFileSync(resolve(assetsPath, 'style/ant-default-vars.less'), 'utf8')
)

module.exports = {
  path: {
    publicPath: '/mlaas/imagelabeler',
    srcPath: resolvePath('src'),
    outputPath: resolvePath('dist'),
    testPath: resolvePath('test'),
    rootPath: resolvePath(''),
    assetsPath
  },
  themeVariables,
  port: 3000
}
