import Axios from 'axios'

export default () => {
  return Axios.create({
    baseURL: 'http://fff07418.ngrok.io/myapp/fooditem/'
    // withCredentials: true
  })
}
<img src="../assets/aayulogic.png" style="width:30%; height:30%; float:left;"><br>
