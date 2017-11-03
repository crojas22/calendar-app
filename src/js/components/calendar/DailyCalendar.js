import React, { Component } from 'react'
import moment from 'moment'
import InfoOfDay from './InfoOfDay'
import { BtnInput, BtnSubmit } from '../reusable/Buttons'

class DailyCalendar extends Component {
  constructor(props){
    super(props)
    this.state = {
      isEditing: false
    }
  }

  eventsForToday = () => this.props.userInfo.events ?
    this.props.userInfo.events.filter(this.filterDate) : []

  verifyTime = () => {
    let start = moment(this._start.value, 'H:mm'),
        end = moment(this._end.value, 'H:mm')
    return this.eventsForToday().filter((each) => {
      let arrayBefore = moment(each.start, 'H:mm'),
          arrayAfter = moment(each.end, 'H:mm')
      return !arrayBefore.isBetween(start, end) && !arrayAfter.isBetween(start, end)
      && !start.isBetween(arrayBefore, arrayAfter) && !end.isBetween(arrayBefore, arrayAfter)
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

  filterDate = date => date.eventDate === this.props.select._d.toString().slice(0,16)

  isEditingHandle = () => this.setState({isEditing: !this.state.isEditing})

  render() {
    const { renderLabel, select, prev, next, userInfo, removeEventAction, editEventAction,
      compleateEventAction } = this.props

    return(
      <table className="table table2 bg-white">
        <thead>
          <tr className='bg-primary'>
            <th colSpan='3' className='text-center text-white'>
              <BtnInput title='<' classes='btn-outline-primary float-left text-white' onClick={prev}/>
              { renderLabel("dddd MMM Do", select ) }
              <BtnInput title='>' classes='btn-outline-primary float-right text-white' onClick={next}/>
            </th>
          </tr>
        </thead>
        <tbody>
          <InfoOfDay eventsForToday={this.eventsForToday()}/>
          <tr>
            <td className={'' + (this.state.isEditing ? 'bg-light' : '')}>
              {
                this.state.isEditing ?
                <div className='container-fluid' onSubmit={this.handleSubmit}>
                  <div className='row'>
                    <div className='col px-0'>
                      <form className='add-event-form m-0'>
                        <input type='text' name='text' className=' form-control w-75 mx-0 bg-light mb-2'
                          ref={input => this._text = input}  placeholder='Add event' required/>
                        <div className='bg-white'>
                          <label htmlFor='from'>start </label>
                          <input type='time' id='from' className='border-0 mx-2'
                            ref={input => this._start = input} required/>
                          <label htmlFor='to'>end</label>
                          <input type='time' id='to' className='border-0 mx-2'
                            ref={input => this._end = input} required/>
                        </div>
                        <BtnSubmit classes="btn-outline-success mt-2 d-inline-block" title='Save'/>
                        <BtnInput classes="btn-outline-danger mt-2 ml-3" title='Cancel' onClick={this.isEditingHandle}/>
                      </form>
                    </div>
                  </div>
                </div>
                :
                <BtnInput title='+' classes='btn-outline-success btn-sm' onClick={this.isEditingHandle} />
              }
            </td>
          </tr>
          {
            this.eventsForToday().map((each, index) => (
              <tr key={index}>
                <td className='py-1 l-h ps-relative'>
                  <small className='text-muted mr-3'>start: {moment(each.start, 'hh:mm').format('hh:mm a')} </small>
                  <small className='text-muted'>end: {moment(each.end, 'hh:mm').format('hh:mm a')} </small>
                  {
                    each.updating ?
                    <div className='input-group w-75'>
                      <input type='text' name='input' className='form-control mx-0'
                      ref={input => this._edit = input}  placeholder={each.text} required/>
                      <BtnInput title='Save' classes='btn-outline-success'
                      onClick={() => editEventAction(each._id, index, each.eventDate, this._edit.value)}/>
                    </div>
                    :
                    <p className={'m-0 ' + (each.compleated ? 'compleated ' : '')}
                      style={{padding: '3px 0 3px'}}>{each.text}</p>
                  }
                  <div className="btn-group">
                    <div className="input-group-btn">
                      <button className="btn btn-outline-primary rounded-0 border-0 dropdown-toggle"
                        type="button" data-toggle="dropdown">
                        Actions
                      </button>
                      <div className="dropdown-menu p-0 rounded-0">
                        <BtnInput title='Edit' classes='btn-outline-primary border-0 btn-block'
                          onClick={() => editEventAction(each._id, index, each.eventDate)}/>
                        <BtnInput title={(each.compleated) ? 'Mark incompleate' : 'Mark complete'}
                          classes='btn-outline-primary border-0 btn-block m-0'
                          onClick={() => compleateEventAction(index, each.eventDate)}/>
                        <BtnInput title='Delete' classes='btn-outline-danger border-0 btn-block m-0'
                          onClick={() => removeEventAction(each._id)}/>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    )
  }
}

export default DailyCalendar
