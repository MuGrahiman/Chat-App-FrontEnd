import { createReducer } from "@reduxjs/toolkit";
import {
	getChats,
	postChat
} from "../Thunks/ChatThunk.js";

const initialState = {
	status: "idle", // loading: 'idle' | 'pending' | 'succeeded' | 'failed'
	// chatId: null,
	// Name: null,
	// recipients: null, //[]
	messages: null,
	error: null,
};

const ChatReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(getChats.pending, (state, action) => {
			state.status = "pending";
			state.error = null;
		})
		.addCase(getChats.fulfilled, (state, action) => {
			state.messages = action.payload?.messages;
			state.status = "succeeded";
			state.error = null;
		})
		.addCase(getChats.rejected, (state, action) => {
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
