import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { BASE_URL } from '../baseUrl'

export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders(headers) {
    const accessToken = sessionStorage.getItem('accessToken')

    if (accessToken && !headers.has('Authorization')) {
      headers.set('Authorization', `Bearer ${accessToken}`)
    }

    headers.set('Content-Type', 'application/json')
    headers.set('Connection', 'keep-alive')

    return headers
  },
})

export const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  let result = await baseQuery(args, api, extraOptions)
  const token = sessionStorage.getItem('accessToken')
  if (result.error && result.error.status === 401 && token !== undefined) {
    localStorage.clear()
    document.location.href = '/login'
  }
  return result
}
