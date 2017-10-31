import React, { Component } from 'react'
import moment from 'moment'
import { BtnInput, BtnSubmit } from '../reusable/Buttons'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addEventAction, removeEventAction } from '../../actions/verification'

class DailyCalendar extends Component {
  constructor(props){
    super(props)
    this.state = {
      isEditing: false
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addEventAction(this._text.value, this.props.select._d)
    this._text.value = ''
  }

  filterDate = date => date.eventDate === this.props.select._d.toString().slice(0,16)

  isEditingHandle = () => this.setState({isEditing: !this.state.isEditing})

  render() {
    const { renderLabel, select, prev, next, userInfo, removeEventAction, editEventAction } = this.props
    return(
      <table className="table table2">
        <thead>
          <tr className='bg-warning'>
            <th colSpan='3' className='text-center text-white'>
              <BtnInput title='<' classes='btn-outline-warning float-left text-white' onClick={prev}/>
              { renderLabel("dddd MMM Do", select ) }
              <BtnInput title='>' classes='btn-outline-warning float-right text-white' onClick={next}/>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {
                this.state.isEditing ?
                <div className='container-fluid' onSubmit={this.handleSubmit}>
                  <div className='row'>
                    <div className='col px-0'>
                      <form className='add-event-form m-0'>
                        <input type='text' name='text' className='form-control mx-0'
                          ref={input => this._text = input}  placeholder='Add event' required/>
                        <BtnSubmit classes="btn-outline-primary mt-2 d-inline-block" title='Save'/>
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
            userInfo.events ? userInfo.events.filter(this.filterDate).map((item, index) => (
              <tr key={index}>
                <td className='py-1 l-h ps-relative'>
                  <small className='text-muted mr-3'>created {moment(item.createdAt).format('MM-DD-YY')}</small>
                  {
                    item.updating ?
                    <input type='text' name='input' className='form-control mx-0'
                    ref={input => this._edit = input}  placeholder={item.text} required/>
                    :
                    <p className='m-0'>{item.text}</p>
                  }
                  <div className="btn-group">
                    {
                      item.updating ?
                      <BtnInput title='Save' classes='btn-outline-success border-0'
                      onClick={() => editEventAction(item._id, index, item.eventDate, this._edit.value)}/>
                      :
                      <BtnInput title='Edit' classes='btn-outline-primary border-0'
                      onClick={() => editEventAction(item._id, index, item.eventDate)}/>
                    }
                    <BtnInput title='X' classes='btn-outline-danger border-0'
                    onClick={() => removeEventAction(item._id)}/>
                  </div>
                </td>
              </tr>
            )) : null
          }
        </tbody>
      </table>
    )
  }
}

export default DailyCalendar
