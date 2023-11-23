import { useQuery } from 'react-query'

import Cookies from 'js-cookie'
import { api } from 'services/api'

export function useStates() {
  const token = Cookies.get('nextfinance.token')

  const { data: states, ...rest } = useQuery(
    'states',
    () => {
      return api
        .get('/state/all', {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then((response) => response.data)
    },
    {
      retry: false,
      refetchOnWindowFocus: false
    }
  )

  return { states, ...rest }
}
