import { createReducer } from "@reduxjs/toolkit";
// import { getAllPvtMsgs, postPvtMsg } from "../Thunks/PrivateThunk.js";

const initialState = {
	status: "idle", // loading: 'idle' | 'pending' | 'succeeded' | 'failed'
	chatId: null,
	recipients: null, //[]
	error: null,
};
// get update block user details
const PrivateReducer = createReducer(initialState, (builder) => {
	// builder
	// 	.addCase(getAllPvtMsgs.pending, (state, action) => {
	// 		state.status = "pending";
	// 		state.error = null;
	// 	})
	// 	.addCase(getAllPvtMsgs.fulfilled, (state, action) => {
	// 		state.messages = action.payload?.messages;
	// 		state.status = "succeeded";
	// 		state.error = null;
	// 	})
	// 	.addCase(getAllPvtMsgs.rejected, (state, action) => {
	// 		state.error = action.payload;
	// 		state.status = "failed";
	// 	})
	// 	.addCase(postPvtMsg.pending, (state, action) => {
	// 		state.status = "pending";
	// 		state.error = null;
	// 	})
	// 	.addCase(postPvtMsg.fulfilled, (state, action) => {
	// 		state.messages = action.payload?.messages;
	// 		state.status = "succeeded";
	// 		state.error = null;
	// 	})
	// 	.addCase(postPvtMsg.rejected, (state, action) => {
	// 		state.error = action.payload;
	// 		state.status = "failed";
	// 	});
});

export default PrivateReducer;
