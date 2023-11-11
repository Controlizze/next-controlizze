import axios from 'axios'

export function getAPIClient() {
  const api = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
      'Content-Type': 'application/json',
      'Acess-Control-Allow-Origin': '*'
    }
  })

  // api.interceptors.request.use((config) => {
  //   console.log(config)

  //   return config
  // })

  return api
}
