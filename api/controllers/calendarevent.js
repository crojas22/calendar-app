import User from './../usersModel'

// add event to calendar
export const addCalendarEvent =  (req, res, next) => {
  User.findById(req.user.info._id, (err, event) => {
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

export const editCalendarEvent = (req, res) => {
  User.findById(req.user.info._id, (err, user) => {
    let array = user.calendarEvent.filter((each) => req.body.eventDate === each.eventDate)
    array[req.body.index].text = req.body.text || array[req.body.index].text,
    array[req.body.index].updating = !array[req.body.index].updating
    user.save((err, result) => {
      res.json(result)
    })
  })
}
