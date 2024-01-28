import { createReducer } from '@reduxjs/toolkit';
import { getAllUsers, userPostOTP, userRegister, userResendOtp } from '../Thunks/AuthThunk';

const initialState = {
	status: 'idle', // loading: 'idle' | 'pending' | 'succeeded' | 'failed'
	authData: null, //userId && OtpId
	error: null,
};

const authReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(userRegister.pending, (state, action) => {
			state.status = "pending";
			state.error = null;
		})
		.addCase(userRegister.fulfilled, (state, action) => {
			state.authData = action.payload;
			state.status = "succeeded";
			state.error = null;
		})
		.addCase(userRegister.rejected, (state, action) => {
			state.error = action.payload;
			state.status = "failed";
		})
		.addCase(userResendOtp.pending, (state, action) => {
			state.status = "pending";
			state.error = null;
		})
		.addCase(userResendOtp.fulfilled, (state, action) => {
			state.authData = action.payload;
			state.status = "succeeded";
			state.error = null;
		})
		.addCase(userResendOtp.rejected, (state, action) => {
			state.error = action.payload;
			state.status = "failed";
		})
		.addCase(userPostOTP.pending, (state, action) => {
			state.status = "pending";
			state.error = null;
		})
		.addCase(userPostOTP.fulfilled, (state, action) => {
			state.authData = action.payload;
			state.status = "succeeded";
			state.error = null;
		})
		.addCase(userPostOTP.rejected, (state, action) => {
			state.error = action.payload;
			state.status = "failed";
		})
		.addCase(getAllUsers.pending, (state, action) => {
			state.status = "pending";
			state.error = null;
		})
		.addCase(getAllUsers.fulfilled, (state, action) => {
			state.authData = action.payload;
			state.status = "succeeded";
			state.error = null;
		})
		.addCase(getAllUsers.rejected, (state, action) => {
			state.error = action.payload;
			state.status = "failed";
		});
});

export default authReducer;
