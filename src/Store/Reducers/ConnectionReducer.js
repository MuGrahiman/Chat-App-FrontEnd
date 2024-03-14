import { createReducer } from "@reduxjs/toolkit";
import { getContacts } from "../Thunks/ConnectionThunk";
import { createGroup } from "../Thunks/GroupThunk";
import { toggleFollowStatus } from "../Thunks/PrivateThunk";

const initialState = {
	status: "idle", // loading: 'idle' | 'pending' | 'succeeded' | 'failed'
	chatList: null,
	followingList: null,
	followerList: null,
	groupList: null,
	subscribedList: null,
	blockedList: null,
	error: null,
};

const ConnectionReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(getContacts.pending, (state, action) => {
			state.status = "pending";
			state.error = null;
		})
		.addCase(getContacts.fulfilled, (state, action) => {
			const {
				chatList,
				followingList,
				followerList,
				groupList,
				subscribedList,
				blockedList,
			} = action.payload;
			state.chatList = chatList;
			state.followingList = followingList;
			state.followerList = followerList;
			state.blockedList = blockedList;
			state.status = "succeeded";
			state.error = null;
		})
		.addCase(getContacts.rejected, (state, action) => {
			state.error = action.payload;
			state.status = "failed";
		})
		.addCase(toggleFollowStatus.pending, (state, action) => {
			state.status = "pending";
			state.error = null;
		})
		.addCase(toggleFollowStatus.fulfilled, (state, action) => {
			const {
				chatList,
				followingList,
				followerList,
				groupList,
				subscribedList,
				blockedList,
			} = action.payload;
			state.chatList = chatList;
			state.followingList = followingList;
			state.followerList = followerList;
			state.status = "succeeded";
			state.error = null;
		})
		.addCase(toggleFollowStatus.rejected, (state, action) => {
			state.error = action.payload;
			state.status = "failed";
		})
		.addCase(createGroup.pending, (state, action) => {
			state.status = "pending";
			state.error = null;
		})
		.addCase(createGroup.fulfilled, (state, action) => {
			const {
				chatList,
				followingList,
				followerList,
				groupList,
				subscribedList,
				blockedList,
			} = action.payload;
			state.chatList = chatList;
			state.followingList = followingList;
			state.followerList = followerList;
			state.status = "succeeded";
			state.error = null;
		})
		.addCase(createGroup.rejected, (state, action) => {
			state.error = action.payload;
			state.status = "failed";
		});
	// .addCase(joinChannel.pending, (state, action) => {
	// 	state.status = "pending";
	// 	state.error = null;
	// })
	// .addCase(joinChannel.fulfilled, (state, action) => {
	// 	state.chats = action.payload;
	// 	state.status = "succeeded";
	// 	state.error = null;
	// })
	// .addCase(joinChannel.rejected, (state, action) => {
	// 	state.error = action.payload;
	// 	state.status = "failed";
	// });
});

export default ConnectionReducer;
