'use strict'

module.exports = {
  port: process.env.PORT || 3000,
  mongo: {
    port: process.env.MONGO_PORT || 27017,
    host: process.env.MONGO_HOST || 'localhost',
    db: process.env.MONGO_DATABASE || 'koa-api',
    user: process.env.MONGO_USER || '',
    password: process.env.MONGO_PASSWORD || ''
  }
}
