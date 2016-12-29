'use strict'

const debug = require('debug')

/** Services to debug */
let services = [
  'com',
  'database',
  'http'
]

/** Set default debuggers */
let debuggers = debug('api')
debuggers.error = debug('api:error')
debuggers.info = debug('api:info')

/** Set debuggers of services */
for (let service of services) {
  debuggers[service] = debug(service)
  debuggers[service].error = debug(`${service}:error`)
  debuggers[service].info = debug(`${service}:info`)
}

module.exports = debuggers