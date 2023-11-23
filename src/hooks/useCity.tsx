import { useQuery } from 'react-query'

import Cookies from 'js-cookie'
import { api } from 'services/api'

export function useCity() {
  const token = Cookies.get('nextfinance.token')

  const { data: cities, ...rest } = useQuery(
    'cities',
    () => {
      return api
        .get('/city/all', {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then((response) => response.data)
    },
    {
      retry: false,
      refetchOnWindowFocus: false
    }
  )

  return { cities, ...rest }
}
