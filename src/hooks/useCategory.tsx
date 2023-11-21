import { useQuery } from 'react-query'

import { api } from 'services/api'

export function useCategory() {
  const { data: categories, ...rest } = useQuery(
    'categories',
    () => {
      return api.get('/category/all').then((response) => response.data)
    },
    {
      retry: false,
      refetchOnWindowFocus: false
    }
  )

  return { categories, ...rest }
}
