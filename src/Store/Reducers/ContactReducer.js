import { createReducer } from "@reduxjs/toolkit";
import {
	getAllUserContacts,
	toggleFollowStatus,
} from "../Thunks/ContactThunk.js";

const initialState = {
	status: "idle", // loading: 'idle' | 'pending' | 'succeeded' | 'failed'
	contacts: null,
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
			state.contacts = contacts;
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
		});
});

export default ContactReducer;
