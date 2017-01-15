'use strict'

const config = require('../../config')
const assert = require('assert')
const faker = require('faker')
const jwt = require('jsonwebtoken')

describe('Auth', function () {
  before(function * () {
    this.agent = global.test.agent
    this.params = {
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    }
  })

  it('should register an user', function * () {
    let res = yield this.agent.post('/auth/register')
    .send(this.params)
    .expect(201)

    jwt.verify(res.body.token, config.jwt.secret, (err, decoded) => {
      if (err) return console.error(err)
      assert.equal(decoded.username, this.params.username)
      assert.equal(decoded.email, this.params.email)
    })
  })

  it('should let user login', function * () {
    let res = yield this.agent.post('/auth/login')
    .send({
      'username': this.params.username,
      'password': this.params.password
    })
    .expect(200)

    jwt.verify(res.body.token, config.jwt.secret, (err, decoded) => {
      if (err) return console.error(err)
      assert.equal(decoded.username, this.user.username)
      assert.equal(decoded.email, this.user.email)
    })
  })

  it('should not let user login if password is wrong', function * () {
    yield this.agent.post('/auth/login')
    .send({
      'username': this.user.username,
      'password': 'wrongpass'
    })
    .expect(401)
  })

  it('should not let user login if user is not register', function * () {
    yield this.agent.post('/auth/login')
    .send({
      'username': 'wronguser',
      'password': this.params.password
    })
    .expect(401)
  })
})
