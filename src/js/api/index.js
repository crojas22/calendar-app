import axios from 'axios'
import config from '../../../config'

const apiUrl = rest => `http://${config.host}:${config.port}/api/${rest}`

export const register = (name, email, password, confirm) => {
  return axios.post(apiUrl('register'), {name, email, password, confirm})
    .then(resp => resp.data)
}

export const login = (email, password) => {
  return axios.post(apiUrl('login'), {email, password})
    .then(resp => resp.data)
}

export const verify = token => {
  return axios.get(apiUrl(`verify`), {
    headers: { Authorization: `Bearer ${token}` }
  })
}

///// CRUD for events

// add event
export const addEventApi = (_id, text, date, token) => {
  return axios.post(apiUrl('addevent'), {_id, text, date}, {
    headers: { Authorization: `Bearer ${token}` }
  })
}

// remove event
export const removeEventApi = (token, item_id) => {
  return axios.delete(apiUrl(`deleteevent/${item_id}`), {
    headers: { Authorization: `Bearer ${token}` }
  }, {item_id})
}
