import React from 'react'
import { BtnInput, BtnSubmit } from '../reusable/Buttons'
import moment from 'moment'

const ItemsDailyEvents = props => {

  let _edit

  return(
    props.events.map((each, index) => (
      <tr key={index}>
        <td className={'pt-0 l-h ' + (each.compleated ? 'bg-light' : '')}>
          <a className='d-block py-3 btn btn-outline-light rounded-0 border-0 dropdown-toggle'
          data-toggle="collapse" data-target={`.target-${index}`}></a>
          <div className={`collapse target-${index}`}>
            <div className="d-flex">

              <BtnInput title='Edit' classes='btn-primary border-0 btn-block'
              onClick={() => props.edit(each._id, index, each.eventDate)}/>

              <BtnInput title={(each.compleated) ? 'Incompleate' : 'Compleate'}
              classes='btn-primary border-0 btn-block m-0'
              onClick={() => props.compleate(index, each.eventDate)}/>

              <BtnInput title='Delete' classes='btn-danger border-0 btn-block m-0'
              onClick={() => props.remove(each._id)}/>

            </div>
          </div>
          <small className='text-muted mr-3'>
          start: {moment(each.start, 'hh:mm').format('hh:mm a')} </small>

          <small className='text-muted'>
          end: {moment(each.end, 'hh:mm').format('hh:mm a')} </small>
          {
            each.updating ?
            <div className='input-group w-75'>

              <input type='text' name='input' className='form-control mx-0'
              ref={input => _edit = input}  placeholder={each.text} required/>

              <BtnInput title='Save' classes='btn-outline-success'
              onClick={() => props.edit(each._id, index, each.eventDate, _edit.value)}/>

            </div>
            :
            <p className={'m-0 ' + (each.compleated ? 'compleated ' : '')}
            style={{padding: '3px 0 3px'}}>{each.text}</p>
          }
        </td>
      </tr>
    ))
  )
}

export default ItemsDailyEvents
