'use strict'

const debug = require('./debug')

/**
 * Error Handler
 *
 * @version 1.0.0
 */
module.exports = function errorHandler () {
  return function * (next) {
    try {
      yield next
    } catch (err) {
      let reporter = debug.error
      err.message = { status: 'error', message: err.message || err.name }
      err.code && (err.message.code = err.code)
      err.code && (reporter = debug.http.error)

      err.details && (err.message.details = err.details)

      reporter(err.message, err.stack)
      this.status = err.status || 503
      this.body = err.message
      this.app.emit('error', err, this)
    }
  }
}
