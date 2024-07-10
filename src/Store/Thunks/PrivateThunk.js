import { createAsyncThunk } from "@reduxjs/toolkit";
import * as Api from "./API";

export const getPrivateChat = createAsyncThunk(
	"chat/private/get",
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
