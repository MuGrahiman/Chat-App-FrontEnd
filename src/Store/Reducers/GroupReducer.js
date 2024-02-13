// import { createReducer } from "@reduxjs/toolkit";
// import { getAllGroups, createGroup } from "../Thunks/GroupContactThunk.js";

// const initialState = {
// status: "idle", // loading: 'idle' | 'pending' | 'succeeded' | 'failed'
// 	chatId: null,
// 	Name: null,
// 	recipients: null, //[]
// 	messages: null,
// 	creator: null,
// 	admins: null, //[]
// 	error: null,
// };

// const GroupReducer = createReducer(initialState, (builder) => {
// 	builder
// 		.addCase(getAllGroups.pending, (state, action) => {
// 			state.status = "pending";
// 			state.error = null;
// 		})
// 		.addCase(getAllGroups.fulfilled, (state, action) => {
// 			state.groups = action.payload;
// 			state.status = "succeeded";
// 			state.error = null;
// 		})
// 		.addCase(getAllGroups.rejected, (state, action) => {
// 			state.error = action.payload;
// 			state.status = "failed";
// 		})
// 		.addCase(createGroup.pending, (state, action) => {
// 			state.status = "pending";
// 			state.error = null;
// 		})
// 		.addCase(createGroup.fulfilled, (state, action) => {
// 			state.groups.push(action.payload);
// 			state.status = "succeeded";
// 			state.error = null;
// 		})
// 		.addCase(createGroup.rejected, (state, action) => {
// 			state.error = action.payload;
// 			state.status = "failed";
// 		});
// });

// export default GroupReducer;
