'use strict'

const db = require('../lib/mongoose')
const Schema = require('mongoose').Schema

let schema = new Schema({
  username: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  email: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  }
}, {
  timestamps: true
})

module.exports = db.model('User', schema)
