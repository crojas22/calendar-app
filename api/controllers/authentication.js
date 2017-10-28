import jwt from 'jsonwebtoken'
import config from '../../config'
import User from './../usersModel'

// Registration
export const registration = (req, res) => {
  if (req.body.password !== req.body.confirm) {
    res.send({success: false, message: 'Password and Confirmation Password do not match'})
  }
  const userData = { name: req.body.name, email: req.body.email, password: req.body.password }
  User.create(userData, (error, user) => {
    if(error) res.json({success: false})
    res.json({success: true})
  })
}

// Login
export const login = (req, res) => {
  User.findOne({email: req.body.email}, (err, user) => {
    if (err) throw error
    if(!user) {
      res.send({ success: false, message: 'Authentication failed. User not found.' })
    } else {
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (isMatch && !err) {
          const info = { _id: user._id, email: user.email, name: user.name }
          let token = jwt.sign({info}, config.secret, {
            expiresIn: 3600
          })
          res.json({token, user})
        } else {
          res.send({success: false, message: 'Authentication failed. Passwords did not match.'})
        }
      })
    }
  })
}

// verification
export const verify = (req, res) => {
  User.findById(req.user.info._id, (err, result) => {
    res.json({result, content: 'verified'})
  })
}
