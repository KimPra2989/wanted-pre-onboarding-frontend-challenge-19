import { configureStore } from "@reduxjs/toolkit"
import { listSlice } from "./Slices/listSlice"
import { themeSlice } from "./Slices/themeSlice"

export const store = configureStore({
  reducer: {
    list: listSlice.reducer,
    theme: themeSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
