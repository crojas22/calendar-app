import React from 'react'

const InfoOfMonth = props => {
  const style={
    height: 20
  }

  const calcGoalProgress = (total, goal) => (total/goal * 100)

  const changeDate = string => {
    let newString = string.split(" ")
    newString.splice(1,1)
    return newString.join(" ")
  }

  const filterDate = date =>
    changeDate(date.eventDate) === changeDate(props.month._d.toString().slice(4,15))

  const totalMonth = props.events ? props.events.filter(filterDate) : []

  const compleated = totalMonth.filter((each) => each.compleated === true).length

  return(
    <tr>
      <td colSpan='7' className='py-0' style={style}>
        <div className='pb-3'>
          <p className='mt-2'>Total/Compleated for Month</p>
          <div className="progress mb-1">
            <div className="progress-bar" role="progressbar"
              style={{
                width: (totalMonth.length === 0 ? `0%` : `${Math.floor(calcGoalProgress(compleated, totalMonth.length))}%`)
              }}> { totalMonth.length }/{ compleated }
            </div>
          </div>
        </div>
      </td>
    </tr>
  )
}

export default InfoOfMonth
