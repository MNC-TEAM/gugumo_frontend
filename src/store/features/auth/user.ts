import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "userSlice",
    initialState : false,
    reducers : {
        loginAction : ()=>{
            return true;
        },
        logoutAction : ()=>{
            return false;
        }
    }
});

export const {loginAction,logoutAction} = userSlice.actions;

export default userSlice.reducer;