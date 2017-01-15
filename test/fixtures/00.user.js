'use strict'

const faker = require('faker')
const User = require('../../models/user')
const Credential = require('../../models/credential')

before(function * () {
  this.user = {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password()
  }

  let user = (yield User.create({
    username: this.user.username,
    email: this.user.email
  })).toObject()

  yield Credential.create({
    user: user._id,
    password: this.user.password
  })

  global.test.fixtures.users.push(this.user)
})

// Delete API Info
after(function * () {
  yield User.remove({})
  yield Credential.remove({})
})
