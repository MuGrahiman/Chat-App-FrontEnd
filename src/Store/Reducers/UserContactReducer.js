import { createReducer } from "@reduxjs/toolkit";
import {
	createGroup,
	// getAllGroups,
	getAllUserContacts,
	toggleFollowStatus,
} from "../Thunks/UserContactThunk.js";

const initialState = {
	status: "idle", // loading: 'idle' | 'pending' | 'succeeded' | 'failed'
	chats: [],
	followings: null,
	followers: null,
	error: null,
};

const ContactReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(getAllUserContacts.pending, (state, action) => {
			state.status = "pending";
			state.error = null;
		})
		.addCase(getAllUserContacts.fulfilled, (state, action) => {
			const { contacts, followings, followers } = action.payload;
			state.chats = contacts;
			state.followings = followings;
			state.followers = followers;
			state.status = "succeeded";
			state.error = null;
		})
		.addCase(getAllUserContacts.rejected, (state, action) => {
			state.error = action.payload;
			state.status = "failed";
		})
		.addCase(toggleFollowStatus.pending, (state, action) => {
			state.status = "pending";
			state.error = null;
		})
		.addCase(toggleFollowStatus.fulfilled, (state, action) => {
			const { contacts, followings, followers } = action.payload;
			state.contacts = contacts;
			state.followings = followings;
			state.followers = followers;
			state.status = "succeeded";
			state.error = null;
		})
		.addCase(toggleFollowStatus.rejected, (state, action) => {
			state.error = action.payload;
			state.status = "failed";
		})
		// .addCase(getAllGroups.pending, (state, action) => {
		// 	state.status = "pending";
		// 	state.error = null;
		// })
		// .addCase(getAllGroups.fulfilled, (state, action) => {
		// 	state.chats = action.payload;
		// 	state.status = "succeeded";
		// 	state.error = null;
		// })
		// .addCase(getAllGroups.rejected, (state, action) => {
		// 	state.error = action.payload;
		// 	state.status = "failed";
		// })
		.addCase(createGroup.pending, (state, action) => {
			state.status = "pending";
			state.error = null;
		})
		.addCase(createGroup.fulfilled, (state, action) => {
			state.chats.push(action.payload);
			state.status = "succeeded";
			state.error = null;
		})
		.addCase(createGroup.rejected, (state, action) => {
			state.error = action.payload;
			state.status = "failed";
		});

});

export default ContactReducer;
