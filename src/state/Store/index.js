import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Reducer/AuthSlice";

export default configureStore({
    reducer: {
        auth: userSlice,
    }
})