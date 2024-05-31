import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen : false
};

const modalSlice = createSlice({
    name : "modal",
    initialState,
    reducers : {
        open : (state)=>{
            return {
                ...state,
                isOpen : true
            }
        },
        close : (state)=>{
            return {
                ...state,
                isOpen : false
            }
        }
    }
});

export const {open,close} = modalSlice.actions;

export default modalSlice.reducer;