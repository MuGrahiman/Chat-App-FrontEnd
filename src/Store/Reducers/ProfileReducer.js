import { createReducer } from "@reduxjs/toolkit";
import { getUser } from "../Thunks/AuthThunk.js";

const initialState = {
	status: "idle", // loading: 'idle' | 'pending' | 'succeeded' | 'failed'
	userDetails: null,
	followingList: null,
	followerList: null,
	groupList: null,
	subscribedList: null,
	blockedList: null,
	error: null,
};

const ProfileReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(getUser.pending, (state, action) => {
			state.status = "pending";
			state.error = null;
		})
		.addCase(getUser.fulfilled, (state, action) => {
			const {
				userDetails,
				followingList,
				followerList,
				groupList,
				channelList,
				subscribedList,
				blockedList,
			} = action.payload;
			state.userDetails = userDetails;
			state.followingList = followingList;
			state.followerList = followerList;
			state.channelList = channelList;
			state.groupList = groupList;
			state.subscribedList = subscribedList;
			state.blockedList = blockedList;
			state.status = "succeeded";
			state.error = null;
		})
		.addCase(getUser.rejected, (state, action) => {
			state.error = action.payload;
			state.status = "failed";
		});
		
});

export default ProfileReducer;
