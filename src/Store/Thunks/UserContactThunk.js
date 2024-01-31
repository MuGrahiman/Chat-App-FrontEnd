import { createAsyncThunk } from "@reduxjs/toolkit";
import * as Api from "./API";

export const getAllUserContacts = createAsyncThunk(
	"contact/user/get",
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
	"contact/user/patch",
	async (id, thunkApi) => {
		const response = await Api.toggleFollowStatus({ id });
		thunkApi.dispatch(getAllUserContacts());
		return response.data;
	}
);

// export const getAllGroups = createAsyncThunk(
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

export const createGroup = createAsyncThunk(
	"contact/group/create",
	async (data, thunkApi) => {
		try {
			const response = await Api.createGroup(data);
			console.log(response);
			thunkApi.dispatch(getAllUserContacts());
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

// export const joinGroup = createAsyncThunk(
// 	"contact/group/join",
// 	async (id, thunkApi) => {
// 		const response = await Api.joinGroup({ id });
// 		thunkApi.dispatch(getAllGroups());
// 		return response.data;
// 	}
// );

export const removeGroup = createAsyncThunk(
	"contact/group/remove",
	async (id, thunkApi) => {
		const response = await Api.removeGroup({ id });
		thunkApi.dispatch(getAllUserContacts());
		return response.data;
	}
);

