import { configureStore } from "@reduxjs/toolkit";
import { listSlice } from "./Slices/listSlice";

export default configureStore({
    reducer: {
        list : listSlice.reducer,
    }
})