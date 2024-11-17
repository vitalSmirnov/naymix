import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { LoginPayload, LoginResponse, RegisterPayload, RegisterResponse } from './authDataSource.ts'
import { BASE_URL } from '../../baseUrl.ts'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders(headers) {
      headers.set('Connection', 'keep-alive')
      headers.set('Content-Type', 'application/json')
      return headers
    },
  }),
  endpoints: builder => ({
    Login: builder.mutation<LoginResponse, LoginPayload>({
      query: body => ({
        url: `auth/login`,
        method: 'POST',
        body: body,
      }),
    }),
    Register: builder.mutation<RegisterResponse, RegisterPayload>({
      query: body => ({
        url: `auth/register`,
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useLoginMutation, useRegisterMutation } = authApi
