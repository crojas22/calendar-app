import axios from 'axios'
import Cookies from 'universal-cookie'
import { register, login, verify } from '../api/index'
import config from '../../../config'

const cookie = new Cookies()

export const userAuthorized = (bool, payload) => {
  return {
    type: 'AUTH_USER',
    authorized: bool
  }
}

export const getUserInfo = payload => {
  return {
    type: 'USER_INFO',
    payload
  }
}

export const removeUserInfo = () => {
  return {
    type: 'REMOVE_USER_INFO'
  }
}

export const loginUser = (email, password, history) => {
  return (dispatch) => {
    login(email, password).then(resp => {
      cookie.set('token', resp, {path: '/'})
      dispatch(userAuthorized(true))
      dispatch(getUserInfo(resp.user))
      history.push('/homepage')
    })
  }
}

export const didRegister = (bool) => {
  return {
    type: 'REGISTRATION_SUCCESS',
    registered: bool
  }
}

export const registerUser = (name, email, password, confirm) => {
  return (dispatch) => {
    register(name, email, password, confirm).then(resp => {
      dispatch(didRegister(true))
      window.location.href = `${window.location.origin}/login`
    })
  }
}

export const logoutUser = (history) => {
  return (dispatch) => {
    dispatch(userAuthorized(false))
    dispatch(removeUserInfo())
    cookie.remove('token', { path: '/' })
    history.push('/login')
  }
}

export const verificationTest = (history) => {
  return (dispatch) => {
    const tokens = cookie.get('token')
    tokens ? verify(tokens.token).then(resp => {
      if (resp.data.content === 'verified') {
        dispatch(userAuthorized(true))
        dispatch(getUserInfo(tokens.user))
      } else {
        dispatch(userAuthorized(false))
      }
    }) : history.push('/login')
  }
}
