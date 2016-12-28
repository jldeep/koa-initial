'use strict'

let controller = {}

/**
* Controller method to get API info
*
* @function getInfo
* @version 1.0.0
*
*/
controller.getInfo = function * () {
  this.body = {
    version: '0.2.0'
  }
}

module.exports = controller
