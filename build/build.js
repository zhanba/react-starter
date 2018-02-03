const webpack = require('webpack')
const config = require('./webpack.config.prd')()

const createCompiler = config => {
  const compiler = webpack(config)
  return () => {
    return new Promise((resolve, reject) => {
      compiler.run((err, stats) => {
        if (err) return reject(err)
        console.log(stats.toString({ colors: true }) + '\n')
        resolve()
      })
    })
  }
}

// const compileModernBundle = createCompiler(modernConfig)
const compileLegacyBundle = createCompiler(config)

compileLegacyBundle()
