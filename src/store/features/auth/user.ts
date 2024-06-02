import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {

    try {
        const tokenState = localStorage.getItem('token');

        if(tokenState === null){
            return {isAuthenticated : false};
        }

        return JSON.parse(tokenState);
    }
    catch{
        return {isAuthenticated : false};
    }

}


const userSlice = createSlice({
    name : "userSlice",
    initialState : { isAuthenticated: false },
    reducers : {
        login: state => { state.isAuthenticated = true },
        logout: state => { state.isAuthenticated = false }
    }
});

export const {login,logout} = userSlice.actions;

export default userSlice.reducer;