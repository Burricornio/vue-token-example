import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  setUser (credentials) {
    return apiClient.post('//localhost:3000/register', credentials)
  },
  login (credentials) {
    return apiClient.post('//localhost:3000/login', credentials)
  }
}
