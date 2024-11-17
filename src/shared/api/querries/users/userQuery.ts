import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '../index.tsx'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQuery,
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

export const {} = userApi
