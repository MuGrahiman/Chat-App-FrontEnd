import { createReducer } from "@reduxjs/toolkit";
import { createChannel } from "../Thunks/ChannelThunk.js";

const initialState = {
	status: "idle", // loading: 'idle' | 'pending' | 'succeeded' | 'failed'
	channelList: null, //[],
	error: null,
};

const ChannelReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(createChannel.pending, (state, action) => {
			state.status = "pending";
			state.error = null;
		})
		.addCase(createChannel.fulfilled, (state, action) => {
			state.chats = action.payload;
			state.status = "succeeded";
			state.error = null;
		})
		.addCase(createChannel.rejected, (state, action) => {
			state.error = action.payload;
			state.status = "failed";
		});
});

export default ChannelReducer;
