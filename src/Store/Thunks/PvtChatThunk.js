import { createAsyncThunk } from "@reduxjs/toolkit";
import * as Api from "./API";

export const getAllPvtMsgs = createAsyncThunk(
	"chat/pvt/get",
	async (chatData, thunkApi) => {
	
		try {
			const response = await Api.getAllUserChats(chatData);
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

export const postPvtMsg = createAsyncThunk(
	"chat/pvt/post",
	async ({type, id, text }, thunkApi) => {
		const response = await Api.postChat({type, id, text });
		thunkApi.dispatch(getAllPvtMsgs({type,id}));
		return response.data;
	}
);
