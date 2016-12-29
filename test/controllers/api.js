'use strict'

const assert = require('assert')

describe('Area', function () {
  before(function * () {
    this.agent = global.test.agent
  })

  it('should be get API info', function * () {
    let res = yield this.agent.get('/')
      .expect(200)

    assert.equal(res.body.version, global.test.fixtures.api.version)
  })
})
