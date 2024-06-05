import { configureStore } from '@reduxjs/toolkit'
import modal from './features/modal/modal'

export const makeStore = () => {
  return configureStore({
    reducer: {modal},
    middleware : (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false // rtk을 사용할경우 serializableCheck을 false로 해줘야합니다.
      }),
    devTools : process.env.NODE_ENV !== "production",
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']