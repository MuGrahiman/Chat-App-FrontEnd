import { createAsyncThunk } from "@reduxjs/toolkit";
import * as Api from "./API";
import { getContacts } from "./ConnectionThunk";

// export const getAllChannels = createAsyncThunk(
// 	"contact/group/get",
// 	async (_, thunkApi) => {
// 		console.log("response");
// 		console.log();

// 		try {
// 			const response = await Api.getAllGroups();
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

export const createChannel = createAsyncThunk(
	"contact/channel/create",
	async (data, thunkApi) => {
		try {
			const response = await Api.createChannel(data);
			console.log(response);
			thunkApi.dispatch(getContacts());
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

export const getChannelChat = createAsyncThunk(
	"chat/channel/get",
	async (authData, thunkApi) => {
		try {
			const response = await Api.getChat(authData);
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

// export const joinChannel = createAsyncThunk(
// 	"contact/channel/join",
// 	async (id, thunkApi) => {
// 		const response = await Api.joinChannel({ id });
// 		thunkApi.dispatch(getAllChannels());
// 		return response.data;
// 	}
// );

// export const removeChannel = createAsyncThunk(
// 	"contact/group/remove",
// 	async (id, thunkApi) => {
// 		const response = await Api.removeChannel({ id });
// 		thunkApi.dispatch(getAllUserContacts());
// 		return response.data;
// 	}
// );
