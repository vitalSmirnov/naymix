import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    // [registerApi.reducerPath]: registerApi.reducer,
    // [publicationApi.reducerPath]: publicationApi.reducer,
    // [profileApi.reducerPath]: profileApi.reducer,
    // [anamnesisApi.reducerPath]: anamnesisApi.reducer,
    // [chatApi.reducerPath]: chatApi.reducer,
    // [commentsApi.reducerPath]: commentsApi.reducer,
    // [friendsApi.reducerPath]: friendsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat
      // registerApi.middleware,
      // publicationApi.middleware,
      // profileApi.middleware,
      // anamnesisApi.middleware,
      // chatApi.middleware,
      // commentsApi.middleware,
      // friendsApi.middleware
      (),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
