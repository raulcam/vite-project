import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../reducers/auth';
import counterSlice from '../reducers/contador';
import  userState  from "../reducers/user";

export const store = configureStore({
    reducer:{
        auth: authReducer,
        counter: counterSlice,
        user: userState
    }
}) 