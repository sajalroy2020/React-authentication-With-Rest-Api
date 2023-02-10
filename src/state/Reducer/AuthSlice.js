import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: 'user',

    initialState: {
        user: null,
        authenticated: false
    },

    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        authenticatedTrue: (state) => {
            state.authenticated = true;
        },
        authenticatedFalse: (state) => {
            state.authenticated = false;

        }
    }
})

export const { setUser, authenticatedTrue, authenticatedFalse } = userSlice.actions;
export default userSlice.reducer;