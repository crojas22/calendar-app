import jwt from 'jsonwebtoken'
import config from '../../config'
import User from './../usersModel'

// Registration
export const registration = (req, res, next) => {
  if (req.body.password !== req.body.confirm) {
    let err = new Error("Password do not match")
    err.status = 404
    return next(err)
  }
  const userData = { name: req.body.name, email: req.body.email, password: req.body.password }
  User.create(userData, (error, user) => {
    if(error) return next(error)
    res.json({success: true})
  })
}

// Login
export const login = (req, res, next) => {
  User.findOne({email: req.body.email}, (err, user) => {
    if(err) return next(err)
    if(!user) {
      err = new Error("User not found")
      err.status = 404
      return next(err)
    } else {
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (isMatch && !err) {
          const info = { _id: user._id, email: user.email, name: user.name }
          let token = jwt.sign({info}, config.secret, {
            expiresIn: 3600
          })
          res.json({success: true, token, user})
        } else {
          err = new Error("Password does not match records")
          next(err)
        }
      })
    }
  })
}

// verification
export const verify = (req, res, next) => {
  User.findById(req.user.info._id, (err, result) => {
    if(err) return next(err)
    res.json({result, success: true})
  })
}
