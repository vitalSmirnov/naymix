import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from '../querries/auth/authQuery'
import { compareApi } from '../querries/compare/compareQuery'
import { teamApi } from '../querries/team/teamQuery'
import { userApi } from '../querries/users/userQuery'

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [compareApi.reducerPath]: compareApi.reducer,
    [teamApi.reducerPath]: teamApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(authApi.middleware, compareApi.middleware, teamApi.middleware, userApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
