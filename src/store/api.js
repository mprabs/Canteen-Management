import Axios from 'axios'

export default () => {
  return Axios.create({
    baseURL: 'https://c98dc4fe.ngrok.io/myapp/fooditem',
    withCredentials: true
  })
}
