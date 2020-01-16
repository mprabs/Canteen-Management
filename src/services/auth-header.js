export default function authHeader () {
  let userdetails = JSON.parse(localStorage.getItem('userdetails'))

  if (userdetails) {
    return { Authorization: 'Bearer ' + userdetails }
  } else {
    return {}
  }
}
