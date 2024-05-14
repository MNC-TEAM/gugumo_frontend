import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name : "modal",
    initialState : {
        login : false,
        signup : false,
        popup : true,
    },
    reducers : {
        onLogin : ()=>{
            return {
                login : true,
                signup : false,
                popup : false,
            }
        },
        onSignup : ()=>{
            return {
                login : false,
                signup : true,
                popup : false,
            }
        },
        onClose : ()=>{
            return {
                login : false,
                signup : false,
                popup : false,
            }
        }
    }
});

export const {onLogin,onSignup,onClose} = modalSlice.actions;

export default modalSlice.reducer;