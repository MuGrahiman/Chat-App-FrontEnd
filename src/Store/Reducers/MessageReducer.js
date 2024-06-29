import { createAction, createReducer } from "@reduxjs/toolkit";
import { getAllMessages, postMessage } from "../Thunks/MessageThunk.js";
import { resetMessage } from "../Actions/Actions.js";

const initialState = {
	status: "idle", // loading: 'idle' | 'pending' | 'succeeded' | 'failed'
	messages: null,//[]
	error: null,
};


const MessageReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(getAllMessages.pending, (state, action) => {
			state.status = "pending";
			state.error = null;
		})
		.addCase(getAllMessages.fulfilled, (state, action) => {
			state.messages = action.payload?.messages;
			state.status = "succeeded";
			state.error = null;
		})
		.addCase(getAllMessages.rejected, (state, action) => {
			state.error = action.payload;
			state.status = "failed";
		})
		.addCase(postMessage.pending, (state, action) => {
			state.status = "pending";
			state.error = null;
		})
		.addCase(postMessage.fulfilled, (state, action) => {
			state.messages = action.payload?.messages;
			state.status = "succeeded";
			state.error = null;
		})
		.addCase(postMessage.rejected, (state, action) => {
			state.error = action.payload;
			state.status = "failed";
		})
		.addCase(resetMessage, (state) => Object.assign(state, initialState));
});

export default MessageReducer;
