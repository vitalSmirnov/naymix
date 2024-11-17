import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../baseUrl.ts'

export const compareApi = createApi({
  reducerPath: 'compareApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}teams/`,
    prepareHeaders(headers) {
      headers.set('Connection', 'keep-alive')
      headers.set('Content-Type', 'application/json')
      return headers
    },
  }),
  tagTypes: ['Post', 'Team'],
  endpoints: builder => ({
    GetTeams: builder.query<GetTeamsResponse, GetTeamsPayload>({
      query: () => ``,
      providesTags: ['Post'],
    }),
    CreateTeam: builder.mutation<CreateTeamResponse, CreateTeamPayload>({
      query: body => ({
        url: `create`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Post'],
    }),
  }),
})

export const {} = compareApi
