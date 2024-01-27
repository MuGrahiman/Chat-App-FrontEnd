import { createReducer } from "@reduxjs/toolkit";
import {
	getAllUserChats,
	postChat,
} from "../Thunks/ChatThunk.js";

const initialState = {
	status: "idle", // loading: 'idle' | 'pending' | 'succeeded' | 'failed'
	messages: null,
	// recipients:
	error: null,
};

const ChatReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(getAllUserChats.pending, (state, action) => {
			state.status = "pending";
			state.error = null;
		})
		.addCase(getAllUserChats.fulfilled, (state, action) => {
			state.messages = action.payload?.messages;
			state.status = "succeeded";
			state.error = null;
		})
		.addCase(getAllUserChats.rejected, (state, action) => {
			state.error = action.payload;
			state.status = "failed";
		})
		.addCase(postChat.pending, (state, action) => {
			state.status = "pending";
			state.error = null;
		})
		.addCase(postChat.fulfilled, (state, action) => {
			state.messages = action.payload?.messages;
			state.status = "succeeded";
			state.error = null;
		})
		.addCase(postChat.rejected, (state, action) => {
			state.error = action.payload;
			state.status = "failed";
		});
});

export default ChatReducer;
