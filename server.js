'use strict'

const koa = require('koa')
const server = koa()
const logger = require('koa-logger')
const config = require('./config')

// logger
server.use(logger())

// response
server.use(function *() {
  this.body = {
    version: '0.1.0'
  }
})

server.listen(config.port, function () {
  console.log('Server listening at %s', config.port)
})
