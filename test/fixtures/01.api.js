'use strict'

const ApiModel = require('../../models/api')

before(function * () {
  let version = yield ApiModel.create({
    version: '0.4.0'
  })
  
  global.test.fixtures.api.version = version.version
})

// Delete API Info
after(function * () {
  yield ApiModel.remove({})
})
