import React, { Component } from 'react'
import moment from 'moment'
import Week from './Week'
import DailyCalendar from './DailyCalendar'
import { BtnInput } from '../reusable/Buttons'

class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      month : moment(),
      select: moment()
    }
  }

  select = day => this.setState({ select: day.date})

  previous = () => this.setState({ month: this.state.month.add(-1, 'M') })

  previousDay = () => this.setState({ select: this.state.select.add(-1, 'day') })

  next = () => this.setState({ month: this.state.month.add(1, 'M') })

  nextDay = () => this.setState({ select: this.state.select.add(1, 'day') })

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

  renderDayNames = () => {
    let arr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return arr.map((day) => (
      <th key={day}>{day}</th>
    ))
  }

  renderLabel = (format, x) => <span className='py-4 d-inline-block text-white'>{x.format(format)}</span>

  renderDailyCalendar = () => {
    return <DailyCalendar {...this.state} renderLabel={this.renderLabel}
      prev={this.previousDay} next={this.nextDay}/>
  }

  render() {
    return(
      <div className='container mt-5'>
        <div className='row justify-content-sm-between justify-content-lg-around'>
          <div className='col-xs-12 col-md-5 col-lg-6 pt-5 px-0 px-sm-1'>
            <table className="table table-responsive table1">
              <thead>
                <tr className='bg-primary'>
                  <th colSpan='7' className='text-center'>
                    <BtnInput title='<' classes='btn-outline-primary float-left text-white' onClick={this.previous}/>
                    {this.renderLabel("MMMM, YYYY", this.state.month)}
                    <BtnInput title='>' classes='btn-outline-primary float-right text-white' onClick={this.next}/>
                  </th>
                </tr>
                <tr>
                  { this.renderDayNames() }
                </tr>
              </thead>
              <tbody>
                { this.renderWeeks() }
              </tbody>
            </table>
          </div>
          <div className='col-xs-12 col-md-5 col-lg-6 pt-5 px-0 px-1'>
            { this.renderDailyCalendar() }
          </div>
        </div>
      </div>
    )
  }
}

export default Calendar
