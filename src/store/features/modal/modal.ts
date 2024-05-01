import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name : "modal",
    initialState : {
        login : false,
        signup : false
    },
    reducers : {
        onLogin : ()=>{
            return {
                login : true,
                signup : false
            }
        },
        onSignup : ()=>{
            return {
                login : false,
                signup : true
            }
        },
        onClose : ()=>{
            return {
                login : false,
                signup : false
            }
        }
    }
});

export const {onLogin,onSignup,onClose} = modalSlice.actions;

export default modalSlice.reducer;