import React from 'react'

const Week = (props) => {

  let days = [],
    date = props.date,
    month = props.month,
    i = 0
  for (i; i < 7; i++) {
    let day = {
      name: date.format('dd').substring(0,1),
      number: date.date(),
      date: date,
      isCurrentMonth: date.month() === month.month(),
      isToday: date.isSame(new Date(), "day")
    }
    days.push(
      <td key={i} className={'text-center' + (day.date.isSame(props.selected) ? " bg-lightblue text-white" : "")
      + (day.isCurrentMonth ? "" : " text-muted bg-light") + (day.isToday ? ' text-primary' : '')}
      onClick={() => props.select(day)}>{day.number}</td>
    )
    date = date.clone()
    date.add(1, 'd')
  }

  return(
    <tr>{days}</tr>
  )
}

export default Week
