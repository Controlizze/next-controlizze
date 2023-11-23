import { useMutation, useQuery, useQueryClient } from 'react-query'

import Cookies from 'js-cookie'
import { api } from 'services/api'
import { UserRequest } from 'types/User'

export function useUser() {
  const queryClient = useQueryClient()

  const user = Number(Cookies.get('nextfinance.userid'))
  const user_name = Cookies.get('nextfinance.username')
  const user_email = Cookies.get('nextfinance.useremail')
  const token = Cookies.get('nextfinance.token')

  const {
    data: users,
    refetch,
    ...rest
  } = useQuery(
    'users',
    () => {
      return api
        .get(`/user/all`, {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then((response) => response.data)
    },
    {
      retry: false,
      refetchOnWindowFocus: false
    }
  )

  const update = useMutation({
    mutationFn: ({
      name,
      email,
      date_birth,
      cel,
      city,
      state
    }: UserRequest) => {
      if (name !== user_name) {
        Cookies.remove('nextfinance.username')
        Cookies.set('nextfinance.username', name, { expires: 1 })
      }

      if (email !== user_email) {
        Cookies.remove('nextfinance.useremail')
        Cookies.set('nextfinance.useremail', email, { expires: 1 })
      }

      return api
        .put(
          `/user/update/${user}`,
          {
            name,
            email,
            date_birth,
            cel,
            city,
            state
          },
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        )
        .then((response) => {
          return response.data
        })
    },
    onSuccess: () => {
      refetch()
      queryClient.invalidateQueries(['users'])
    }
  })

  return {
    users,
    update,
    ...rest
  }
}
