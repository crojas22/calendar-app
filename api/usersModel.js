'use strict'

import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import config from '../config'

const connection = mongoose.connect(config.mongodbUri, { useMongoClient: true })
mongoose.Promise = global.Promise

const CalendarEventSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  eventDate: {
    type: String,
    required: true
  },
  updating: {
    type: Boolean,
    default: false
  },
  compleated: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  start: {
    type: String
  },
  end: {
    type: String
  }
})

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowerase: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  calendarEvent: [CalendarEventSchema]
})

UserSchema.methods.comparePassword = function(password, callback) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) return callback(err)
    callback(null, isMatch)
  })
}

// hash password before saving to database
UserSchema.pre('save', function(next) {
  const user = this
  if (this.isModified('password') || this.isNew) {
    bcrypt.hash(user.password, 10, function(err, hash){
      if (err) return next(err)
      user.password = hash
      next()
    })
  } else {
    return next()
  }
})

UserSchema.pre('save', function(next) {
  const user = this
  user.calendarEvent.sort(function(a,b) {return parseInt(a.start) - parseInt(b.start)})
  return next()
})

const User = mongoose.model('User', UserSchema)

export default User
