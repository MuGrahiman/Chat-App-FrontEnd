import { createAsyncThunk } from "@reduxjs/toolkit";
import * as Api from "./API";

export const getAllUserChats = createAsyncThunk(
	"chat/get",
	async (id, thunkApi) => {
		console.log("response");
		console.log(id);

		try {
			const response = await Api.getAllUserChats(id);
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

export const postChat = createAsyncThunk(
	"chat/post",
	async ({ chatId, text }, thunkApi) => {
		const response = await Api.postChat({ chatId, text });
		thunkApi.dispatch(getAllUserChats(chatId));
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
