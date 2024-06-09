import { createSlice } from "@reduxjs/toolkit";

interface initialStateT {
    Component : any,
    isOpen : boolean
}

const initialState : initialStateT[] = [];

const modalSlice = createSlice({
    name : "modal",
    initialState,
    reducers : {
        open : (state,actions)=>{
            return [
                ...state,
                {
                    Component : actions.payload,
                    isOpen : true
                }
            ]
        },
        close : (state,actions)=>{
            return state.filter((prev)=>prev.Component !== actions.payload);
        }
    }
});

export const {open,close} = modalSlice.actions;

export default modalSlice.reducer;