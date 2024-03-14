import { createAsyncThunk } from "@reduxjs/toolkit";
import * as Api from "./API";

export const getContacts = createAsyncThunk(
	"get/user/contact",
	async (authData, thunkApi) => {
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

export const checkConnection = createAsyncThunk(
	"check/user/contact",
	async (id, thunkApi) => {
		const response = await Api.checkConnection(id);

		return response.data;
	}
);

export const createConnection = createAsyncThunk(
	"add/user/contact",
	async (id, thunkApi) => {
		const response = await Api.createConnection(id);

		console.log("🚀 createConnection~ response:", response);
		return response.data;
	}
);
