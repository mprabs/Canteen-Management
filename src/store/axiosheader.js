import axios from 'axios'

export const instance = axios.create({
  headers: { Authorization: localStorage.getItem('userdetails') }
})
