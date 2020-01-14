import Axios from 'axios'

export default () => {
  return Axios.create({
    baseURL: 'http://fff07418.ngrok.io/myapp/fooditem/'
    // withCredentials: true
  })
}
