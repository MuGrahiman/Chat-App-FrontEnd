import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/Auth";
import authReducer from "./Reducers/AuthReducer";
import ConnectionReducer from "./Reducers/ConnectionReducer";
import GroupReducer from "./Reducers/GroupReducer";
import ChannelReducer from "./Reducers/ChannelReducer";
import PrivateReducer from "./Reducers/PrivateReducer";
import ChatReducer from "./Reducers/ChatReducer";

export const store = configureStore({
	reducer: {
		user: userSlice.reducer,
		auth: authReducer,
		connection: ConnectionReducer,
		private: PrivateReducer,
		group: GroupReducer,
		channel: ChannelReducer,
		chat: ChatReducer,
	},
});

export * from "./Thunks/AuthThunk";
export * from "./Thunks/ConnectionThunk";
export * from "./Thunks/ChannelThunk";
export * from "./Thunks/ChatThunk";
export * from "./Thunks/PrivateThunk";
export * from "./Thunks/GroupThunk";
export const { addUser, removeUser } = userSlice.actions;
