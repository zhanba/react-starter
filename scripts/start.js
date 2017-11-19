const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const opn = require('opn')
const config = require('../config/dev.js')()

const app = express()
const compiler = webpack(config)

app.use(
  webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  })
)

app.use(webpackHotMiddleware(compiler, {
  log: false, // disable browser console log
  heartbeat: 2000
}))

app.listen(3000, function () {
  opn('http://localhost:3000')
  console.log('App listening on port 3000!\n')
})
