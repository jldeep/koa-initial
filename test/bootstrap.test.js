'use strict'

process.env.NODE_ENV = 'test'

const argv = require('yargs').argv
const agent = require('co-supertest')
const server = require('../server')

before(function () {
  global.test = {
    server: server,
    agent: agent(argv.url || server),
    fixtures: {
      api: {
        version: ''
      },
      users: []
    }
  }
})
