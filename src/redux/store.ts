import { configureStore } from "@reduxjs/toolkit"
import rootSlice from "./slices/rootSlice"

export const store = configureStore({
  reducer: {
    root: rootSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
