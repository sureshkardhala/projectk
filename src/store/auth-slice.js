import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: "auth",
    initialState:{
        isSignedIn: false,
    },
    reducers:{
        singIn(state){
            console.log(state.isSignedIn);
        }
    }
});
export const authActions = authSlice.actions;
export default authSlice;