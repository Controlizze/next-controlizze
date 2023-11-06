import axios from 'axios'
import { parseCookies } from 'nookies'

export function getAPIClient(ctx?: any) {
  const { 'nextfinance.token': token } = parseCookies(ctx)

  const api = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
      'Content-Type': 'application/json',
      'Acess-Control-Allow-Origin': '*'
    }
  })

  api.interceptors.request.use((config) => {
    console.log(config)

    return config
  })

  if (token) {
    api.defaults.headers['Authorization'] = `OAuth2 ${token}`
  }

  return api
}
