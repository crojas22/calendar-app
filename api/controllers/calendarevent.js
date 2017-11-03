import User from './../usersModel'

// add event to calendar
export const addCalendarEvent =  (req, res, next) => {
  User.findById(req.user.info._id, (err, event) => {
    event.calendarEvent.push({
      text: req.body.text,
      eventDate: req.body.date,
      start: req.body.start,
      end: req.body.end
    })
    event.save((err, result) => {
      if(err) return next(err)
      res.json(result)
    })
  })
}

export const deleteCalendarEvent = (req, res, next) => {
  User.update({_id: req.user.info._id},{'$pull': {'calendarEvent': {_id: req.params.id}}}, (err, update) => {
    User.findById(req.user.info._id, (err, result) => {
      if(err) return next(err)
      res.json(result)
    })
  })
}

export const editCalendarEvent = (req, res, next) => {
  User.findById(req.user.info._id, (err, user) => {
    let array = user.calendarEvent.filter((each) => req.body.eventDate === each.eventDate)
    array[req.body.index].text = req.body.text || array[req.body.index].text,
    array[req.body.index].updating = !array[req.body.index].updating
    user.save((err, result) => {
      if(err) return next(err)
      res.json(result)
    })
  })
}
