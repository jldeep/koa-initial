'use strict'

const db = require('../lib/mongoose')
const Schema = require('mongoose').Schema

let schema = new Schema({
  version: {
    type: String
  }
}, {
  timestamps: true
})

module.exports = db.model('Api', schema)
