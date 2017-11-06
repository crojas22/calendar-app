import React from 'react'

const InfoOfDay = props => {
  const calcGoalProgress = (total, goal) => (total/goal * 100)

  const total = props.eventsForToday.length

  const compleated = props.eventsForToday.filter((each) => each.compleated === true).length

  return(
    <tr>
      <td>
        <div>
          <p>Total/Compleated Events</p>
          <div className="progress mb-1">
            <div className="progress-bar" role="progressbar"
              style={{width: (total === 0 ? `0%` : `${Math.floor(calcGoalProgress(compleated, total))}%`)}}>
              { total }/{ compleated }
            </div>
          </div>
        </div>
      </td>
    </tr>
  )
}

export default InfoOfDay
