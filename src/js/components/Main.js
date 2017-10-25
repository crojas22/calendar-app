import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { registerUser, loginUser, logoutUser } from '../actions/verification'
import Navbar from './reusable/Navbar'
import Home from './Home'
import Homepage from './Homepage'
import Login from './login-register/Login'
import Register from './login-register/Register'

const Main = ({ auth, registerUser, loginUser, logoutUser, location, history, info }) => {

  const handleForm = (name, email, password, confirm) => {
    registerUser(name, email, password, confirm)
  }

  const handleLogin = (email, password, history) => {
    loginUser(email, password, history)
  }

  const { pathname } = location
  return(
    <div>
      <Navbar auth={auth} logoutUser={logoutUser} history={history} {...info}/>
      {
        pathname === '/' ? <Home /> :
        pathname === '/login' ? <Login handleLogin={handleLogin} history={history}/> :
        pathname === '/register' ? <Register registration={handleForm} /> :
        pathname === '/homepage' ? <Homepage history={history}/> : null
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.userAuthorized,
    info: state.userInfo
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({registerUser, loginUser, logoutUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
