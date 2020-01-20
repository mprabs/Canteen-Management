import Axios from 'axios'

export default () => {
  return Axios.create({
    baseURL: 'http://127.0.0.1:8000/myapp/fooditem/'
    // withCredentials: true
  })
}
