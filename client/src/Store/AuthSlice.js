import { createSlice } from "@reduxjs/toolkit";

// createSlice

const AuthSlice = createSlice({
    name:'auth',
    initialState:[],
    reducers:{
        AddAuth:(state,action)=>{
            state.push(action)
        },
        RemoveAuth:(state,action)=>{
            state.pop()
        }
    }
})

export const {AddAuth,RemoveAuth} = AuthSlice.actions;
export default AuthSlice.reducer;
