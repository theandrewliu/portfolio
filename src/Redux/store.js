import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../Redux/homeSlice"

export default configureStore({
    reducer: {
        home: homeReducer,
    }
})