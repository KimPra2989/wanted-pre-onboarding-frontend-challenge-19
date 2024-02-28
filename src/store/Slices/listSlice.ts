import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export const listSlice = createSlice({
  name: "list",
  initialState: ["사전과제2 조사하기", "read me 작성하기"],
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.push(action.payload)
    },
    deleteList: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1)
    },
    updateList: (state, action: PayloadAction<{idx : number, value: string}>) => {
      state[action.payload.idx] = action.payload.value
    },
  },
})

export const { add, deleteList, updateList } = listSlice.actions