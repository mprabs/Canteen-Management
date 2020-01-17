import Axios from 'axios'

export default () => {
  return Axios.create({
    baseURL: 'http://28a51681.ngrok.io/myapp/fooditem'
    // withCredentials: true
  })
}
