import User from './../usersModel'

// add event to calendar
export const addCalendarEvent =  (req, res, next) => {
  User.findById(req.body._id, (err, event) => {
    event.calendarEvent.push({
      text: req.body.text,
      eventDate: req.body.date
    })
    event.save((err, result) => {
      if(err) return next(err)
      res.json(result)
    })
  })
}

export const deleteCalendarEvent = (req, res) => {
  User.update({_id: req.user.info._id},{'$pull': {'calendarEvent': {_id: req.params.id}}}, (err, update) => {
    User.findById(req.user.info._id, (err, result) => {
      res.json(result)
    })
  })
}
