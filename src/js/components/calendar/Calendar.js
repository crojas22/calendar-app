import React, { Component } from 'react'
import moment from 'moment'
import Week from './Week'
import DayNames from './DayNames'

class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      month : moment(),
      select: moment()._d
    }
  }

  select = (day) => {
    this.setState({ select: day.date._d})
  }

  previous = () => {
    const month = this.state.month
    month.add(-1, 'M')
    this.setState({ month: month })
  }

  next = () => {
    const month = this.state.month
    month.add(1, 'M')
    this.setState({ month: month })
  }

  renderWeeks = () => {
    let weeks = [],
      done = false,
      date = this.state.month.clone().startOf("month").day("Sunday"),
      monthIndex = date.month(),
      count = 0
    while(!done) {
      weeks.push(<Week key={date.toString()} date={date.clone()} month={this.state.month} select={this.select} selected={this.state.select}/>)
      date.add(1, 'w')
      done = count++ > 2 && monthIndex !== date.month()
      monthIndex = date.month()
    }
    return weeks
  }

  renderMonthLabel = () => {
    return <span className='py-4 d-inline-block text-white'>{this.state.month.format("MMMM, YYYY")}</span>
  }

  render() {
    return(
      <div className='container mt-5'>
        <div className='row justify-content-center'>
          <div className='col-xs-12 col-sm-8 pt-5 px-0 justify-content-center'>
            <table className="table table-responsive">
              <thead>
                <tr className='bg-primary'>
                  <th colSpan='7' className='text-center'>
                    <input className='float-left btn btn-outline-primary text-white'
                      type='button' value='<' onClick={this.previous}/>
                    {this.renderMonthLabel()}
                    <input className='float-right btn btn-outline-primary text-white'
                      type='button' value='>' onClick={this.next}/>
                  </th>
                </tr>
                <DayNames />
              </thead>
              <tbody>
                {this.renderWeeks()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Calendar
