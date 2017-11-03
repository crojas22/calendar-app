import Cookies from 'universal-cookie'
import { register, login, verify, getEventApi, removeEventApi, addEventApi,
  editEventApi, compleateEventApi } from '../api/index'

const cookie = new Cookies()
const user = cookie.get('user')

export const userAuthorized = bool => {
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

export const didRegister = bool => {
  return {
    type: 'REGISTRATION_SUCCESS',
    registered: bool
  }
}

export const loginUser = (email, password, history) => {
  return (dispatch) => {
    login(email, password).then(resp => {
      if (resp.success === true) {
        cookie.set('token', resp.token, {path: '/'})
        cookie.set('user', resp.user, {path: '/'})
        dispatch(userAuthorized(true))
        dispatch(getUserInfo(resp.user))
        history.push('/calendar')
      } else {
        alert(resp.message)
      }
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
    const cookie = new Cookies()
    const tokens = cookie.get('token')
    tokens ? verify(tokens).then(resp => {
      if (resp.data.success === true) {
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
export const addEventAction = (text, date, start, end) => {
  return (dispatch) => {
    const tokens = cookie.get('token')
    addEventApi(text, date.toString().slice(0,16), start, end, tokens)
    .then(resp => {
      dispatch(getUserInfo(resp.data))
    })
  }
}
// Remove event
export const removeEventAction = item_id => {
  return (dispatch) => {
    const tokens = cookie.get('token')
    removeEventApi(tokens, item_id)
    .then(resp => dispatch(getUserInfo(resp.data)))
  }
}
// Edit event
export const editEventAction = (item_id, index, eventDate, text) => {
  return (dispatch) => {
    const tokens = cookie.get('token')
    editEventApi(tokens, item_id, index, eventDate, text)
    .then(resp => dispatch(getUserInfo(resp.data)))
  }
}
// compleate event
export const compleateEventAction = (index, eventDate) => {
  return (dispatch) => {
    const tokens = cookie.get('token')
    compleateEventApi(tokens, index, eventDate)
    .then(resp => dispatch(getUserInfo(resp.data)))
  }
}
