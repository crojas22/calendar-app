'use strict'

import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const CalendarEventSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  eventDate: {
    type: String,
    required: true
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

const User = mongoose.model('User', UserSchema)

export default User
