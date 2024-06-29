import { createAsyncThunk } from "@reduxjs/toolkit";
import * as Api from "./API";

export const getAllMessages = createAsyncThunk(
	"message/get",
	async (msgData, thunkApi) => {
		try {
			const response = await Api.getAllMessages(msgData);
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

export const postMessage = createAsyncThunk(
	"chat/post",
	async ({ type, id, text }, thunkApi) => {
		const response = await Api.postMessage({ type, id, text });
		thunkApi.dispatch(getAllMessages({ type, id }));
		return response.data;
	}
);
