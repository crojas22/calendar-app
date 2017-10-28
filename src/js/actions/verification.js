import Cookies from 'universal-cookie'
import { register, login, verify, getEventApi, removeEventApi, addEventApi } from '../api/index'

const cookie = new Cookies()
const tokens = cookie.get('token')
const user = cookie.get('user')

export const userAuthorized = (bool, payload) => ({ type: 'AUTH_USER', authorized: bool })

export const getUserInfo = payload => ({ type: 'USER_INFO', payload })

export const removeUserInfo = () => ({ type: 'REMOVE_USER_INFO' })

export const didRegister = bool => ({ type: 'REGISTRATION_SUCCESS', registered: bool })

export const loginUser = (email, password, history) => {
  return (dispatch) => {
    login(email, password).then(resp => {
      cookie.set('token', resp.token, {path: '/'})
      cookie.set('user', resp.user, {path: '/'})
      dispatch(userAuthorized(true))
      dispatch(getUserInfo(resp.user))
      history.push('/homepage')
    })
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

export const logoutUser = history => {
  return (dispatch) => {
    dispatch(userAuthorized(false))
    dispatch(removeUserInfo())
    cookie.remove('token', { path: '/' })
    cookie.remove('user', { path: '/' })
    history.push('/login')
  }
}

export const verificationTest = history => {
  return (dispatch) => {
    tokens ? verify(tokens).then(resp => {
      if (resp.data.content === 'verified') {
        dispatch(userAuthorized(true))
        dispatch(getUserInfo(resp.data.result))
      } else {
        dispatch(userAuthorized(false))
      }
    }) : history.push('/login')
  }
}

// CRUD
// Add event
export const addEventAction = (text, date) => {
  return (dispatch) => {
    addEventApi(user._id, text, date.toString().slice(0,16), tokens)
    .then(resp => {
      dispatch(getUserInfo(resp.data))
    })
  }
}
// Remove event 
export const removeEventAction = item_id => {
  return (dispatch) => {
    removeEventApi(tokens, item_id)
    .then(resp => dispatch(getUserInfo(resp.data)))
  }
}
