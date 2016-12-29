'use strict'

const ApiModel = require('../models/api')

let controller = {}

/**
* Controller method to get API info
*
* @function getInfo
* @version 1.0.0
*
*/
controller.getInfo = function * () {
  let apiInfo = yield ApiModel.findOne()
  this.body = apiInfo
}

module.exports = controller
