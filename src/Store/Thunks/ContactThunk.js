import { createAsyncThunk } from "@reduxjs/toolkit";
import * as Api from "./API";

export const getAllUserContacts = createAsyncThunk(
	"chat/chatList",
	async (authData, thunkApi) => {
		console.log("response");
		console.log(authData);

		try {
			const response = await Api.getAllUserContacts(authData);
			return response.data;
		} catch (error) {
			return thunkApi.rejectWithValue(
				error?.response?.data?.message ||
					error?.response?.message ||
					error?.message ||
					"something went wrong" 
			);
		} 
	}
);

export const toggleFollowStatus = createAsyncThunk(
	"chat/toggleFollow",
	async (id, thunkApi) => {
		const response = await Api.toggleFollowStatus({ id });
		thunkApi.dispatch(getAllUserContacts());
		return response.data;
	}
);

// export const userPostOTP = createAsyncThunk(
// 	"auth/otp",
// 	async (authData, thunkApi) => {
// 		try {
// 			const response = await Api.userPostOTP(authData);
// 			console.log(response);
// 			return response.data;
// 		} catch (error) {
// 			return thunkApi.rejectWithValue(
// 				error?.response?.data?.message ||
// 					error?.response?.message ||
// 					error?.message ||
// 					"something went wrong"
// 			);
// 		}
// 	}
// );

// export const userLogin = createAsyncThunk(
// 	"auth/login",
// 	async (authData, thunkApi) => {
// 		try {
// 			const response = await Api.userLogin(authData);
// 			console.log(response);

// 			return thunkApi.dispatch(addUser(response.data));
// 		} catch (error) {
// 			return thunkApi.rejectWithValue(
// 				error?.response?.data?.message ||
// 					error?.response?.message ||
// 					error?.message ||
// 					"something went wrong"
// 			);
// 		}
// 	}
// );
