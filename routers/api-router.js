'use strict'

const Router = require('koa-router')
const controller = require('./../controllers/api-controller')

let router = new Router({
  prefix: '/'
})

/** Get Info */
router.get('/',
  controller.getInfo
)
module.exports = router
