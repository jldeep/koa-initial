'use strict'

const bodyParser = require('koa-bodyparser')
const koa = require('koa')
const server = koa()
const logger = require('koa-logger')
const config = require('./config')
const fs = require('fs')
const path = require('path')
const errorHandler = require('./lib/errorHandler')
const jwt = require('koa-jwt')

server.use(bodyParser())
// logger
server.use(logger())
// Error Handler
server.use(errorHandler())
server.use(jwt({ secret: config.jwt.secret }).unless({ path: [/^\/auth\/login/, /^\/auth\/register/] }))

// Read routers folder and add it
for (let controller of fs.readdirSync(path.resolve('routers'))) {
  let file = path.resolve('routers', controller)
  if (/-router.js$/.test(file) && fs.statSync(file).isFile()) {
    try {
      server.use(require(file).routes())
    } catch (e) {
      console.error(e)
    }
  }
}

if (module.parent) {
  module.exports = server.listen()
} else {
  server.listen(config.port, function () {
    console.log('Server listening at %s', config.port)
  })
}
