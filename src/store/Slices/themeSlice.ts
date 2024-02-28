import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import themeSet, { ThemeSet } from "../../styles/themeSet"

const localTheme = localStorage.getItem('theme') as ThemeSet|null
export const themeSlice = createSlice({
  name: "theme",
  initialState: localTheme ? themeSet[localTheme] : themeSet.loid,
  reducers: {
    switchTheme: (state, action: PayloadAction<ThemeSet>) => {
      state
      return themeSet[action.payload]
    },
  },
})

export const { switchTheme } = themeSlice.actions