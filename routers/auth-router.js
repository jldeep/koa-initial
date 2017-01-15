'use strict'

const Router = require('koa-router')
const controller = require('./../controllers/auth-controller')
const joi = require('joi')
const validate = require('../lib/validate')


let router = new Router({
  prefix: '/auth'
})

router.post('/register',
  validate({
    body: {
      username: joi.string().required(),
      password: joi.string().required(),
      email: joi.string().email().required()
    }
  }),
  controller.register
)

router.post('/login',
  validate({
    body: {
      username: joi.string().required(),
      password: joi.string().required()
    }
  }),
  controller.login
)

module.exports = router
