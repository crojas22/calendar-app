import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { registerUser, loginUser, logoutUser, verificationTest, addEventAction,
  removeEventAction, compleateEventAction , editEventAction } from '../actions/verification'
import { getWeatherInfo, getForecastInfo } from '../actions/weather'
import Navbar from './reusable/Navbar'
import Home from './Home'
import Calendar from './calendar/Calendar'
import Homepage from './Homepage'
import Login from './forms/Login'
import Register from './forms/Register'

const Main = props => {

  const { pathname } = props.location
  const { history, userInfo, auth, logoutUser } = props

  const handleForm = (name, email, password, confirm) => {
    props.registerUser(name, email, password, confirm)
  }

  const handleLogin = (email, password, history) => {
    props.loginUser(email, password, history)
  }

  return(
    <div className={'main ' + (pathname === '/' ? '' : 'd-flex align-items-center')}>
      <Navbar auth={auth} logoutUser={logoutUser} history={history}
      path={pathname} info={userInfo} />
      {
        pathname === '/' ? <Home /> :
        pathname === '/login' ? <Login handleLogin={handleLogin} history={history}/> :
        pathname === '/register' ? <Register registration={handleForm} /> :
        pathname === '/calendar' ? <Homepage history={history} {...props}/> : null
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.userAuthorized,
    userInfo: state.userInfo
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    registerUser, loginUser, logoutUser, verificationTest, addEventAction,
    removeEventAction, compleateEventAction, editEventAction, getWeatherInfo,
    getForecastInfo
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
