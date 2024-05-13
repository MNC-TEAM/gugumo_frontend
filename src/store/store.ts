import { configureStore } from '@reduxjs/toolkit'
import modal from './features/modal/modal'
import user from './features/auth/user'
import edit from './features/edit/edit'

export const makeStore = () => {
  return configureStore({
    reducer: {
      modal,
      user,
      edit
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']