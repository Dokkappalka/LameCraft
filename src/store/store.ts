import { configureStore, combineReducers } from '@reduxjs/toolkit'
import MainReducer from './reducers/MainSlice'
const rootReducer = combineReducers({
  MainReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
