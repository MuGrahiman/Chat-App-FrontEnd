import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/Auth";
import authReducer from "./Reducers/AuthReducer";
import ContactReducer from "./Reducers/ContactReducer";
import ChatReducer from "./Reducers/ChatReducer";

export const store = configureStore({
	reducer: {
		user: userSlice.reducer,
		auth: authReducer,
		contacts: ContactReducer,
		chat:ChatReducer,
	},
});

export * from "./Thunks/AuthThunk";
export * from "./Thunks/ContactThunk";
export * from "./Thunks/ChatThunk";
export const { addUser, removeUser } = userSlice.actions;
