import React, { Component } from 'react'
import { BtnInput } from '../reusable/Buttons'
import TableBody from './TableBody'

class DailyCalendar extends Component {
  constructor(props){
    super(props)
    this.state = {
      isEditing: false
    }
  }

  isEditingHandle = () => this.setState({isEditing: !this.state.isEditing})

  submitForm = (text, date) => console.log(date.toString().slice(0,16))

  render() {
    const { renderLabel, prev, next, select } = this.props
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
        <TableBody toggle={this.isEditingHandle} submitForm={this.submitForm} {...this.props} {...this.state}/>
      </table>
    )
  }
}

export default DailyCalendar
