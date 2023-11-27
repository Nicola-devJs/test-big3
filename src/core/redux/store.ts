import { configureStore } from '@reduxjs/toolkit'
import { rootReduser } from './rootReduser'

export const store = configureStore({
   reducer: rootReduser,
})

export type RootState = ReturnType<typeof rootReduser>
export type AppDispatch = typeof store.dispatch
