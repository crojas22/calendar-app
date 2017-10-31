import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { registerUser, loginUser, logoutUser, verificationTest, addEventAction,
  removeEventAction, editEventAction } from '../actions/verification'
import Navbar from './reusable/Navbar'
import Home from './Home'
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
    <div>
      <Navbar auth={auth} logoutUser={logoutUser} history={history} info={userInfo} />
      {
        pathname === '/' ? <Home /> :
        pathname === '/login' ? <Login handleLogin={handleLogin} history={history}/> :
        pathname === '/register' ? <Register registration={handleForm} /> :
        pathname === '/homepage' ? <Homepage history={history} {...props}/> : null
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
    removeEventAction, editEventAction
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
