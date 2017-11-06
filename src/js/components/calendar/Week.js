import React from 'react'
import { connect } from 'react-redux'

const Week = props => {

  const totalEvents = variable => {
    if (props.events) {
      let total = props.events.filter((each) => (
        each.eventDate === variable.toString().slice(4,15)
      )).length
      if (total > 0) return <span className='week-span py-1 px-2 rounded-circle bg-primary'>{total}</span>
    }
  }

  let days = [],
    date = props.date,
    month = props.month,
    i = 0
  for (i; i < 7; i++) {
    let day = {
      number: date.date(),
      date,
      isCurrentMonth: date.month() === month.month(),
      isToday: date.isSame(new Date(), "day")
    }
    days.push(
      <td key={i} onClick={() => props.selectHandle(day)} className={'text-center ps-relative '
        + (day.date.isSame(props.selected._d) ? " bg-lightblue text-white " : "")
        + (day.isCurrentMonth ? "" : " text-muted bg-light") + (day.isToday ? ' text-primary' : '')}>
        {
          day.number
        }
        {
          totalEvents(day.date._d)
        }
      </td>
    )
    date = date.clone()
    date.add(1, 'd')
  }

  return(
    <tr>{days}</tr>
  )
}

const mapStateToProps = state => ({ events: state.userInfo.events})

export default connect(mapStateToProps)(Week)
