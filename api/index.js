import express from 'express'
import mongoose from 'mongoose'
import { registration, login, verify } from './controllers/authentication'
import { addCalendarEvent, deleteCalendarEvent } from './controllers/calendarevent'
import config from '../config'
import User from './usersModel'

const router = express.Router()
mongoose.connect(config.mongodbUri, { useMongoClient: true })
mongoose.Promise = global.Promise

// Registration
router.post('/register', registration)
// Login
router.post('/login', login)
// Verification route
router.get('/verify', verify)

//Crud calendar event
// Add
router.post('/addevent', addCalendarEvent)
// delete
router.delete('/deleteevent/:id', deleteCalendarEvent)



export default router
