import React from 'react'
import { connect } from 'react-redux'
import { BtnLink } from './reusable/Buttons'
import Section from './home/Section'
import Section2 from './home/Section2'

const Home = props => {
  return(
    <div className='image'>
      <div className='background container-fluid d-flex justify-content-center align-items-center flex-column'>
        <h1 className='text-white'>My Calendar App</h1>
        <div className='text-center py-4'>

          <BtnLink to='/register' title='Register' classes={'btn-primary mx-3 '
          + (props.auth ? 'd-none' : '') }/>

          <BtnLink to={props.auth ? '/calendar' : '/login'} title={props.auth ? 'myCalendar' : 'Login'}
          classes='btn-success mx-3'/>

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
