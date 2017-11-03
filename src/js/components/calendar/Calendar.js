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

  selectFunction = day => this.setState({ select: day.date})

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
      weeks.push(
        <Week key={date.toString()} date={date.clone()} month={this.state.month}
        selectHandle={this.selectFunction} selected={this.state.select}/>
      )
      date.add(1, 'w')
      done = count++ > 2 && monthIndex !== date.month()
      monthIndex = date.month()
    }
    return weeks
  }

  renderDayNames = () => {
    let arr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return arr.map((day) => <th key={day}>{day}</th>)
  }

  renderLabel = (format, x) => <span className='py-4 d-inline-block text-white'>{x.format(format)}</span>

  render() {
    return(
       <div className='container mt-5'>
        <div className='row pt-3'>
          <div className='col-lg-6 pt-2 px-2'>
            <table className="table table1 bg-white" style={{boxShadow: '3px 3px 1px 1px black'}}>
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
          <div className='col-lg-6 pt-2 px-2'>
            <DailyCalendar {...this.state} {...this.props} renderLabel={this.renderLabel}
              prev={this.previousDay} next={this.nextDay}/>
          </div>
        </div>
       </div>
    )
  }
}

export default Calendar
