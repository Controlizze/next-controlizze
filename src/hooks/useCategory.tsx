import { useQuery } from 'react-query'

import Cookies from 'js-cookie'
import { api } from 'services/api'

export function useCategory() {
  const token = Cookies.get('nextfinance.token')

  const { data: categories, ...rest } = useQuery(
    'categories',
    () => {
      return api
        .get('/category/all', {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then((response) => response.data)
    },
    {
      retry: false,
      refetchOnWindowFocus: false
    }
  )

  return { categories, ...rest }
}
