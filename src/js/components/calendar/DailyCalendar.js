import React, { Component } from 'react'
import moment from 'moment'
import InfoOfDay from './InfoOfDay'
import { BtnInput, BtnSubmit } from '../reusable/Buttons'
import ItemsDailyEvents from './ItemsDailyEvents'

class DailyCalendar extends Component {
  constructor(props){
    super(props)
    this.state = {
      isEditing: false
    }
  }

  eventsForToday = () => this.props.userInfo.events ?
    this.props.userInfo.events.filter(this.filterDate) : []

  // will make sure new time being picked is not taken already
  verifyTime = () => {
    let start = moment(this._start.value, 'H:mm'),
        end = moment(this._end.value, 'H:mm')
    if (start > end) return alert('Start time is higher than end time')
    return this.eventsForToday().filter((each) => {
      let arrayBefore = moment(each.start, 'H:mm'),
          arrayAfter = moment(each.end, 'H:mm')
      return !arrayBefore.isBetween(start, end)
      && !arrayAfter.isBetween(start, end)
      && !start.isBetween(arrayBefore, arrayAfter)
      && !end.isBetween(arrayBefore, arrayAfter)
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.verifyTime().length === this.eventsForToday().length) {
      this.props.addEventAction(
        this._text.value, this.props.select._d, this._start.value, this._end.value
      )
      this.isEditingHandle()
    } else {
      alert('time slot already taken')
    }
  }

  filterDate = date => date.eventDate === this.props.select._d.toString().slice(4,15)

  isEditingHandle = () => this.setState({ isEditing: !this.state.isEditing })

  render() {

    const { renderLabel, select, prev, next, userInfo,
      removeEventAction, editEventAction, compleateEventAction } = this.props

    return(
      <table className="table table2 bg-white">
        <thead>
          <tr className='bg-primary'>

            <th colSpan='3' className='text-center text-white'>
              <BtnInput title='<' onClick={prev}
              classes='btn-outline-primary float-left text-white'/>

              { renderLabel("dddd MMM Do", select ) }

              <BtnInput title='>' onClick={next}
              classes='btn-outline-primary float-right text-white'/>

            </th>
          </tr>
        </thead>
        <tbody>

          <InfoOfDay eventsForToday={this.eventsForToday()}/>

          <tr>
            <td>

              {
                this.state.isEditing ?
                <div className='container-fluid' onSubmit={this.handleSubmit}>
                  <div className='row'>
                    <div className='col px-0'>
                      <form className='add-event-form m-0'>

                        <input type='text' name='text'
                        ref={input => this._text = input}
                        className='form-control w-75 mx-0 mb-2'
                        placeholder='Add event' required/>

                        <div className='bg-white'>
                        <div>

                            <label htmlFor='from'>Start time</label>
                            <input type='time' id='from' className='border-0 m-2'
                            ref={input => this._start = input} required/>

                          </div>
                          <div>

                            <label htmlFor='to'>End time</label>
                            <input type='time' id='to' className='border-0 m-2'
                            ref={input => this._end = input} required/>

                          </div>
                        </div>

                        <BtnSubmit title='Save'
                        classes="btn-outline-success mt-2 d-inline-block"/>

                        <BtnInput classes="btn-outline-danger mt-2 ml-3"
                        title='Cancel' onClick={this.isEditingHandle}/>

                      </form>
                    </div>
                  </div>
                </div>
                :
                <BtnInput title='+' classes='btn-outline-success btn-sm'
                onClick={this.isEditingHandle} />
              }

            </td>
          </tr>

          <ItemsDailyEvents events={this.eventsForToday()}
            edit={editEventAction} compleate={compleateEventAction}
            remove={removeEventAction}
          />

        </tbody>
      </table>
    )
  }
}

export default DailyCalendar
