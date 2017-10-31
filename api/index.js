import express from 'express'
import { registration, login, verify } from './controllers/authentication'
import { addCalendarEvent, deleteCalendarEvent, editCalendarEvent } from './controllers/calendarevent'
import User from './usersModel'

const router = express.Router()

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
// edit
router.put('/editevent', editCalendarEvent)




export default router
