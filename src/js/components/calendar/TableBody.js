import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addEventAction, removeEventAction } from '../../actions/verification'
import { BtnSubmit, BtnInput } from '../reusable/Buttons'

const TableBody = props => {
  let _text
  let {submitForm, select, toggle, isEditing, addEventAction, userInfo, removeEventAction} = props

  const handleSubmit = (e) => {
    e.preventDefault()
    addEventAction(_text.value, select._d)
    toggle()
  }

  const filterDate = date => date.eventDate === select._d.toString().slice(0,16)

  return(
    <tbody>
      <tr>
        <td>
          {
            isEditing ?
            <div className='container-fluid' onSubmit={handleSubmit}>
              <div className='row'>
                <div className='col px-0'>
                  <form className='add-event-form m-0'>
                    <input type='text' name='text' className='form-control mx-0'
                      ref={input => _text = input}  placeholder='Add event' required/>
                    <BtnSubmit classes="btn-outline-primary mt-2 d-inline-block" title='Save'/>
                    <BtnInput classes="btn-outline-danger mt-2 ml-3" title='Cancel' onClick={toggle}/>
                  </form>
                </div>
              </div>
            </div>
            :
            <BtnInput title='+' classes='btn-outline-success btn-sm' onClick={toggle} />
          }
        </td>
      </tr>
      {
        userInfo.events ? userInfo.events.filter(filterDate).map((item, index) => (
          <tr key={index}><td>{item.text}<BtnInput  title='X'
          classes='btn-sm btn-outline-danger float-right'
          onClick={() => removeEventAction(item._id)} /></td></tr>
        )) : null
      }
    </tbody>
  )
}

const mapStateToProps = state => {
  return { userInfo: state.userInfo }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({addEventAction, removeEventAction}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TableBody)
