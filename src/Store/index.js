import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/Auth";
import authReducer from "./Reducers/AuthReducer";
import ContactReducer from "./Reducers/ContactReducer";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		contact: ContactReducer,
		user: userSlice.reducer,
	},
});

export * from "./Thunks/AuthThunk";
export * from "./Thunks/ContactThunk";
export const { addUser, removeUser } = userSlice.actions;
