import axios from 'axios'
import Constants from './constant'
import { isAuthenticated } from './auth'
import { Buffer } from 'buffer'

export const getData = (url, p) => {
  var username = 'wholesaler_app@ecarter.co'
  var password = '09i4u73157N5Jnl3f6C6t2XAKa5qFO31'
  p.params.user_id = isAuthenticated()?.user_id
  console.log(p)
  return axios
    .get(
      Constants.BASE_URL + url.toString(),
      { params: p.params, auth: { username, password } },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    .then((response) => {
      if (response.status === 401) {
        localStorage.removeItem('jwt')
      }
      console.log(response.data)
      return response.data
    })
    .catch((error) => {
      console.log(error)
      if (error.response.status === 401) {
        localStorage.removeItem('jwt')
      }
      return error
    })
}
export const postData = (url, body) => {
  var username = 'wholesaler_app@ecarter.co'
  var password = '09i4u73157N5Jnl3f6C6t2XAKa5qFO31'
  return axios
    .post(
      Constants.BASE_URL + url.toString(),
      body,
      { auth: { username, password } },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    .then((response) => {
      console.log(response.data)
      return response.data
    })
    .catch((error) => {
      console.log(error)
      return error
    })
}
export const putData = (url, body) => {
  var username = 'wholesaler_app@ecarter.co'
  var password = '09i4u73157N5Jnl3f6C6t2XAKa5qFO31'
  const encodedBase64Token = Buffer.from(`${username}:${password}`).toString('base64')
  const authorization = `Basic ${encodedBase64Token}`
  return axios
    .put(Constants.BASE_URL + url.toString(), body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: authorization,
      },
    })
    .then((response) => {
      // console.log(response.data)
      return response.data
    })
    .catch((error) => {
      console.log(error)
      return error
    })
}
export const patchData = (url, body) => {
  return axios
    .patch(Constants.BASE_URL + url.toString(), body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${isAuthenticated()}`,
      },
    })
    .then((response) => {
      console.log(response.data)
      return response.data
    })
    .catch((error) => {
      console.log(error)
      return error
    })
}
export const deleteData = (url, body) => {
  return axios
    .delete(
      Constants.BASE_URL + url.toString(),
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${isAuthenticated()}`,
        },
      },
      body,
    )
    .then((response) => {
      console.log(response.data)
      return response.data
    })
    .catch((error) => {
      console.log(error)
      return error
    })
}
export const uploadFile = (url, body) => {
  var username = 'wholesaler_app@ecarter.co'
  var password = '09i4u73157N5Jnl3f6C6t2XAKa5qFO31'
  const encodedBase64Token = Buffer.from(`${username}:${password}`).toString('base64')
  const authorization = `Basic ${encodedBase64Token}`
  return axios
    .post(
      Constants.BASE_URL + url.toString(),
      {
        headers: {
          'content-type': 'multipart/form-data',
          Authorization: authorization,
        },
      },
      body,
    )
    .then((response) => {
      console.log(response.data)
      return response.data
    })
    .catch((error) => {
      console.log(error)
      return error
    })
}
