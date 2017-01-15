'use strict'

const db = require('../lib/mongoose')
const Schema = require('mongoose').Schema
const bcrypt = require('bcryptjs')

let schema = new Schema({
  user: {
    ref: 'User',
    type: Schema.Types.ObjectId
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

schema.pre('save', function (next) {
  if (this.password) {
    bcrypt.genSalt(11, (err, salt) => {
      if (err) return next(err)

      bcrypt.hash(this.password, salt, (err, hash) => {
        if (err) return next(err)

        this.password = hash
        next()
      })
    })
  }
})

module.exports = db.model('Credential', schema)
