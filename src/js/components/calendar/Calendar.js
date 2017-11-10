import React, { Component } from 'react'
import moment from 'moment'
import Week from './Week'
import WeatherInfo from './WeatherInfo'
import DailyCalendar from './DailyCalendar'
import InfoOfMonth from './InfoOfMonth'
import { BtnInput } from '../reusable/Buttons'

class Calendar extends Component {
  state = {
    month : moment(),
    select: moment()
  }

  selectFunction = day => this.setState({ select: day.date})

  previous = () => this.setState({ month: this.state.month.add(-1, 'month') })

  previousDay = () => this.setState({ select: this.state.select.add(-1, 'day') })

  next = () => this.setState({ month: this.state.month.add(1, 'month') })

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
      // if 1st week has last month and current month, loop wont stop on 1st week
      done = count++ > 2 && monthIndex !== date.month()
      monthIndex = date.month()
    }
    return weeks
  }


  renderDayNames = () => {
    const arr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return arr.map((day) => <th key={day}>{day}</th>)
  }


  renderLabel = (format, x) => <span className='py-4 d-inline-block text-white'>{x.format(format)}</span>

  render() {

    return(
       <div className='calendar container'>

        <WeatherInfo />

        <div className='row pt-3'>
          <div className='col-lg-6 pt-2 px-2'>
            <table className="table table1 bg-white">
              <thead>
                <tr className='bg-primary'>
                  <th colSpan='7' className='text-center'>

                    <BtnInput title='<' onClick={this.previous}
                    classes='btn-outline-primary float-left text-white'/>

                    { this.renderLabel("MMMM, YYYY", this.state.month) }

                    <BtnInput title='>' onClick={this.next}
                    classes='btn-outline-primary float-right text-white'/>

                  </th>
                </tr>

                <InfoOfMonth { ...this.state } events={this.props.userInfo.events}/>

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

            <DailyCalendar {...this.state} {...this.props}  next={this.nextDay}
            renderLabel={this.renderLabel} prev={this.previousDay}/>

          </div>
        </div>
      </div>
    )
  }
}

export default Calendar
