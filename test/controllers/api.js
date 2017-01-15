'use strict'

const assert = require('assert')

describe('API', function () {
  before(function * () {
    this.agent = global.test.agent
    this.user = yield global.test.agent
    .post('/auth/login')
    .send({
      username: global.test.fixtures.users[0].username,
      password: global.test.fixtures.users[0].password
    })
    this.user = this.user.body
  })

  it('should be get API info', function * () {
    let res = yield this.agent.get('/')
      .set('Authorization', `Bearer ${this.user.token}`)
      .expect(200)

    assert.equal(res.body.version, global.test.fixtures.api.version)
  })
})
