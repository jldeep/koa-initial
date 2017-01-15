'use strict'

const config = require('../config')
const User = require('../models/user')
const Credential = require('../models/credential')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

let controller = {}

/**
* Controller method to register new user
*
* @function registerUser
* @version 1.0.0
*
*/
controller.register = function * () {
  let username = this.request.body.username
  let password = this.request.body.password
  let email = this.request.body.email

  let user = (yield User.create({
    username: username,
    email: email
  })).toObject()

  yield Credential.create({
    user: user._id,
    password: password
  })

  let token = jwt.sign(user, config.jwt.secret)

  this.status = 201
  user.token = token
  this.body = user
}

controller.login = function * () {
  let username = this.request.body.username
  let password = this.request.body.password
  let user = yield User.findOne({
    username: username
  })
  .lean()

  this.assert(user, 401, { code: 10001 })

  let credential = yield Credential.findOne({
    user: user._id
  })

  this.assert(credential, 401, { code: 10002 })

  let login = bcrypt.compareSync(password, credential.password)

  this.assert(login, 401, { code: 10001 })

  let token = jwt.sign(user, config.jwt.secret)
  user.token = token
  this.body = user
}

module.exports = controller
