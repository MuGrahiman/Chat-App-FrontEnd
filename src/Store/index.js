import { configureStore } from "@reduxjs/toolkit";
import * as user from "./Slices/Auth";
import authReducer from "./Reducers/AuthReducer";
export const store = configureStore({
  reducer: { auth: authReducer,user:user.default },
});


export * from './Thunks/AuthThunk' 
export const { addUser , removeUser} = user