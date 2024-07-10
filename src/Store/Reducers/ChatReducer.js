import { createReducer } from "@reduxjs/toolkit";
import {
	getChat,
	// postChat
} from "../Thunks/ChatThunk.js";
import { resetChat } from "../Actions/Actions.js";

const initialState = {
	status: "idle", // loading: 'idle' | 'pending' | 'succeeded' | 'failed'
	chatDetails: null,//{}
	error: null,
};

const ChatReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(getChat.pending, (state, action) => {
			state.status = "pending";
			state.error = null;
		})
		.addCase(getChat.fulfilled, (state, action) => {
			state.chatDetails = action.payload;
			state.status = "succeeded";
			state.error = null;
		})
		.addCase(getChat.rejected, (state, action) => {
			state.error = action.payload;
			state.status = "failed";
		})
		.addCase(resetChat, (state) => Object.assign(state, initialState));
	// .addCase(postChat.pending, (state, action) => {
	// 	state.status = "pending";
	// 	state.error = null;
	// })
	// .addCase(postChat.fulfilled, (state, action) => {
	// 	state.messages = action.payload?.messages;
	// 	state.status = "succeeded";
	// 	state.error = null;
	// })
	// .addCase(postChat.rejected, (state, action) => {
	// 	state.error = action.payload;
	// 	state.status = "failed";
	// });
});

export default ChatReducer;
