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
export const addEventApi = (text, date, start, end, token) => {
  return axios({
    url: apiUrl('addevent'),
    method: 'post',
    headers: { Authorization: `Bearer ${token}`},
    data: {text, date, start, end}
  })
}

// remove event
export const removeEventApi = (token, item_id) => {
  return axios.delete(apiUrl(`deleteevent/${item_id}`), {
    headers: { Authorization: `Bearer ${token}` }
  }, {item_id})
}

// edit event
export const editEventApi = (token, item_id, index, eventDate, text) => {
  return axios({
    url: apiUrl('editevent'),
    method: 'put',
    headers: { Authorization: `Bearer ${token}` },
    data: {item_id, index, eventDate, text}
  })
}

// compleate event
export const compleateEventApi = (token, index, eventDate) => {
  return axios({
    url: apiUrl('compleateevent'),
    method: 'put',
    headers: { Authorization: `Bearer ${token}` },
    data: {index, eventDate}
  })
}
