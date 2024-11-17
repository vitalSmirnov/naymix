import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GetMemberPayload, GetMemberResponse } from './userDataSource.ts'
import { BASE_URL } from '../../baseUrl.ts'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders(headers) {
      const accessToken = sessionStorage.getItem('accessToken')

      if (accessToken && !headers.has('Authorization')) {
        headers.set('Authorization', `Bearer ${accessToken}`)
      }

      return headers
    },
  }),
  tagTypes: ['Post', 'Team'],
  endpoints: builder => ({
    GetMember: builder.query<GetMemberResponse, GetMemberPayload>({
      query: ({ memberId }) => `members/${memberId}`,
      providesTags: ['Post'],
    }),
  }),
})

export const { useGetMemberQuery } = userApi
