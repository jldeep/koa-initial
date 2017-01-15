'use strict'

const debug = require('./debug')
const joi = require('joi')

/**
 * Validate request params
 *
 * @version 1.0.0
 */
module.exports = function (schemas, options) {
  options = options || {}
  return function * (next) {
    for (let schema in schemas) {
      let requestSchema = this.request[schema]
      requestSchema = schema === 'params' ? this.params : requestSchema

      let validate = joi.validate(requestSchema, schemas[schema], options)

      if (validate.error) {
        debug.http.error(validate)
        this.throw(validate.error, 400)
      }
    }
    yield next
  }
}
