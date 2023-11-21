import axios from 'axios'
import Cookies from 'js-cookie'

export function getAPIClient() {
  const token = Cookies.get('nextfinance.token')

  const api = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
      'Content-Type': 'application/json',
      'Acess-Control-Allow-Origin': '*'
    }
  })

  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }

  // api.interceptors.request.use((config) => {
  //   console.log(config)

  //   return config
  // })

  return api
}
