import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "userSlice",
    initialState : null,
    reducers : {
        loginAction : (state,action)=>{
            return state = action.payload;
        },
        logoutAction : ()=>{
            return null;
        }
    }
});

export const {loginAction,logoutAction} = userSlice.actions;

export default userSlice.reducer;