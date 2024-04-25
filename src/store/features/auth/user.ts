import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "userSlice",
    initialState : false,
    reducers : {
        login : ()=>{
            return true;
        },
        logout : ()=>{
            return false;
        }
    }
});

export const {login,logout} = userSlice.actions;

export default userSlice.reducer;