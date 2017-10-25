import axios from 'axios'
import Cookies from 'universal-cookie'
import config from '../../../config'

export const register = (name, email, password, confirm) => {
  return axios.post(`http://${config.host}:${config.port}/api/register`, {name, email, password, confirm})
    .then(resp => resp.data)
}

export const login = (email, password) => {
  return axios.post(`http://${config.host}:${config.port}/api/login`, {email, password})
    .then(resp => resp.data)
}

export const verify = (token) => {
  return axios.get(`http://${config.host}:${config.port}/api/verify`, {
      headers: { Authorization: `Bearer ${token}` }
    })
}
