const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const opn = require('opn')
const webpackconfig = require('./webpack.config.dev')()
const config = require('./config')

const app = express()
const compiler = webpack(webpackconfig)

app.use(
  webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackconfig.output.publicPath
  })
)

app.use(webpackHotMiddleware(compiler, {
  log: false, // disable browser console log
  heartbeat: 2000
}))

app.listen(config.port, function () {
  opn(`http://localhost:${config.port}`)
  console.log(`App listening on port ${config.port}!\n`)
})
