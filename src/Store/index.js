import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/Auth";
import authReducer from "./Reducers/AuthReducer";
import ContactReducer from "./Reducers/UserContactReducer";
import GroupReducer from "./Reducers/GroupContactReducer";
import PvtChatReducer from "./Reducers/PvtChatReducer";
import GrpChatReducer from "./Reducers/GrpChatReducer";

export const store = configureStore({
	reducer: {
		user: userSlice.reducer,
		auth: authReducer,
		userContacts: ContactReducer,
		// groupContacts: GroupReducer,
		private: PvtChatReducer,
		group: GrpChatReducer,
	},
});

export * from "./Thunks/AuthThunk";
export * from "./Thunks/UserContactThunk";
// export * from "./Thunks/GroupContactThunk";
export * from "./Thunks/PvtChatThunk";
export * from "./Thunks/GrpChatThunk";
export const { addUser, removeUser } = userSlice.actions;
