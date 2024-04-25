import { configureStore } from '@reduxjs/toolkit'
import modal from './features/modal/modal'
import user from './features/auth/user'

export const makeStore = () => {
  return configureStore({
    reducer: {
      modal,
      user
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']