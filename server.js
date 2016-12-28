'use strict'

const koa = require('koa')
const server = koa()
const logger = require('koa-logger')
const config = require('./config')

// logger
server.use(logger())

// routers
server.use(require('./routers/api-router.js').routes())

server.listen(config.port, function () {
  console.log('Server listening at %s', config.port)
})
