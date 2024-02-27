import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export const listSlice = createSlice({
  name: "list",
  initialState: ["적당한 내용"],
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.push(action.payload)
    },
    deleteList: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1)
    },
  },
})

export const { add, deleteList } = listSlice.actions
// export const { delete: x } = listSlice.actions