import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  AddTeamMemberPayload,
  AddTeamMemberResponse,
  CreateTeamPayload,
  CreateTeamResponse,
  GetMembresPayload,
  GetMembresResponse,
  GetTeamsPayload,
  GetTeamsResponse,
} from './teamDataSource.ts'
import { baseQuery } from '../index.tsx'

export const teamApi = createApi({
  reducerPath: 'teamApi',
  baseQuery: baseQuery,
  tagTypes: ['Post', 'Team'],
  endpoints: builder => ({
    GetTeams: builder.query<GetTeamsResponse, GetTeamsPayload>({
      query: () => `teams`,
      providesTags: ['Post'],
    }),
    GetMembres: builder.query<GetMembresResponse, GetMembresPayload>({
      query: ({ teamId }) => `${teamId}/members`,
      providesTags: ['Team'],
    }),
    CreateTeam: builder.mutation<CreateTeamResponse, CreateTeamPayload>({
      query: body => ({
        url: `teams/create`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Post'],
    }),
    AddTeamMember: builder.mutation<AddTeamMemberResponse, AddTeamMemberPayload>({
      query: ({ teamId, body }) => ({
        url: `teams/add/${teamId}/members`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Team'],
    }),
  }),
})

export const { useGetMembresQuery, useGetTeamsQuery, useAddTeamMemberMutation, useCreateTeamMutation } = teamApi
