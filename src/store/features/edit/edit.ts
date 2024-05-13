import { DetailType } from "@/app/types/detail";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState : DetailType | null = null;

const editSlice = createSlice({
    name : "edit",
    initialState,
    reducers : {
        onChange : (state,action)=>{
            console.log(action);
            return action.payload;
        }
    }
});


export const {onChange} = editSlice.actions;
export default editSlice.reducer;