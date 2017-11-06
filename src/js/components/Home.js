import React from 'react'
import { connect } from 'react-redux'
import { BtnLink } from './reusable/Buttons'
import Section from './home/Section'
import Section2 from './home/Section2'

const Home = props => {
  return(
    <div className='image'>
      <div className='container-fluid pt-5 align-middle'>
        <div className='row mt-4'>
          <div className='col mt-sm-5'>
            <h1 className='text-white text-center'>My Calendar App</h1>
          </div>
        </div>
        <div className='text-center py-2 py-sm-5'>

          <BtnLink to='/register' title='Register' classes={'btn-primary mx-3 '
          + (props.auth ? 'd-none' : '') }/>

          <BtnLink to={props.auth ? '/calendar' : '/login'} title={props.auth ? 'myCalendar' : 'Login'}
          classes='btn-success mx-3'/>

        </div>
        <div className="row pb-sm-5">
          <div className='col-lg-4 col-sm-4'>
            <div className='short-text text-muted text-center'>
              Lorem ipsum dolor sit.
            </div>
          </div>
          <div className='col-lg-4 col-sm-4'>
            <div className='short-text text-muted text-center'>
              Lorem ipsum dolor sit.
            </div>
          </div>
          <div className='col-lg-4 col-sm-4 pb-3'>
            <div className='short-text text-muted text-center'>
              Lorem ipsum dolor sit.
            </div>
          </div>
        </div>
      </div>
      <Section />
      <Section2 />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.userAuthorized,
    userInfo: state.userInfo
  }
}

export default connect(mapStateToProps)(Home)
