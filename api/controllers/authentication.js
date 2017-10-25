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
          let token = jwt.sign({user}, config.secret, {
            expiresIn: 3600
          })
          res.json({token: token, user: user})
        } else {
          res.send({success: false, message: 'Authentication failed. Passwords did not match.'})
        }
      })
    }
  })
}
