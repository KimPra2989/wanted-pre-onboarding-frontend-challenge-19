import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import themeSet, { ThemeSet } from "../../styles/themeSet"

export const themeSlice = createSlice({
  name: "theme",
  initialState: themeSet.loid,
  reducers: {
    switchTheme: (state, action: PayloadAction<ThemeSet>) => {
      return themeSet[action.payload]
    },
  },
})

export const { switchTheme } = themeSlice.actions