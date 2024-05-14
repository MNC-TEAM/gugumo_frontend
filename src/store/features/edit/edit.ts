import { DetailType } from "@/app/types/detail";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState : DetailType = {
    postId: 0,
    author: "",
    meetingType: "",
    gameType: "",
    meetingMemberNum: 0,
    meetingDeadline: "",
    openKakao: "",
    location: "",
    title: "",
    content: "",
    createdDateTime: "",
    meetingStatus: "",
    viewCount: 0,
    bookmarkCount: 0,
    meetingTime: "",
    meetingDays: "",
    meetingDateTime : "",
    yours: false
};

const editSlice = createSlice({
    name : "edit",
    initialState,
    reducers : {
        onChange : (_,action : PayloadAction<DetailType>)=>{
            return action.payload;
        }
    }
});


export const {onChange} = editSlice.actions;
export default editSlice.reducer;