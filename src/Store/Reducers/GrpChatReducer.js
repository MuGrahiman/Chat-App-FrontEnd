import { createReducer } from "@reduxjs/toolkit";
import {
	getAllGrpMsgs,
	postGrpMsg,
} from "../Thunks/GrpChatThunk.js";

const initialState = {
	status: "idle", // loading: 'idle' | 'pending' | 'succeeded' | 'failed'
	chatId: null, 
	name:null,
	creator:null,
	admins:null,//[]
	recipients: null,//[]
	messages: null,
	error: null,
};

const ChatReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(getAllGrpMsgs.pending, (state, action) => {
			state.status = "pending";
			state.error = null;
		})
		.addCase(getAllGrpMsgs.fulfilled, (state, action) => {
			state.messages = action.payload?.messages;
			state.status = "succeeded";
			state.error = null;
		})
		.addCase(getAllGrpMsgs.rejected, (state, action) => {
			state.error = action.payload;
			state.status = "failed";
		})
		.addCase(postGrpMsg.pending, (state, action) => {
			state.status = "pending";
			state.error = null;
		})
		.addCase(postGrpMsg.fulfilled, (state, action) => {
			state.messages = action.payload?.messages;
			state.status = "succeeded";
			state.error = null;
		})
		.addCase(postGrpMsg.rejected, (state, action) => {
			state.error = action.payload;
			state.status = "failed";
		});
});

export default ChatReducer;
