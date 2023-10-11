import { useQuery } from 'react-query'

import axios, { AxiosResponse } from 'axios'
import { RegisterUserResponse } from 'types/User'

const instance = axios.create({
  baseURL: 'http://localhost:8080'
})

export const useFetch = (url: string) => {
  const postData = async (
    payload: unknown
  ): Promise<AxiosResponse<RegisterUserResponse>> => {
    const response = await instance.post<RegisterUserResponse>(url, payload)
    return response
  }

  const query = useQuery({
    queryFn: postData,
    queryKey: ['register-user'],
    retry: false
  })

  return {
    ...query,
    postData
  }
}
