'use strict'

module.exports = {
  port: process.env.PORT || 3000,
  jwt: {
    secret: process.env.BO_JWT_SECRET || 'nv/?uwe(7vn4589$%wn4738$%´´$ehrv34!tw38436y94w]vne'
  },
  mongo: {
    port: process.env.MONGO_PORT || 27017,
    host: process.env.MONGO_HOST || 'localhost',
    db: process.env.MONGO_DATABASE || 'koa-api',
    user: process.env.MONGO_USER || '',
    password: process.env.MONGO_PASSWORD || ''
  }
}
