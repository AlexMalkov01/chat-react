import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : localStorage.getItem("user") ?? null,
}

export const userSlice = createSlice({
    name: "user",
    initialState, 
    reducers:{
        initUser: (state , action) => {
            state.user = action.payload
            localStorage.setItem("user", action.payload)
        },
        removeUser:() => {
            localStorage.removeItem("user")
        }
    }
})


