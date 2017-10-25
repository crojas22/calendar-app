import express from 'express'
import mongoose from 'mongoose'
import { registration, login } from './controllers/authentication'
import config from '../config'

const router = express.Router()
mongoose.connect(config.mongodbUri, { useMongoClient: true })
mongoose.Promise = global.Promise

// Registration
router.post('/register', registration)
// Login
router.post('/login', login)
// Verification route
router.get('/verify', (req, res, next) => {
  res.send({content: 'verified'})
})



export default router
