import { createAsyncThunk } from "@reduxjs/toolkit";
import * as Api from "./API";

export const getAllGrpMsgs = createAsyncThunk(
	"chat/grp/get",
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

export const postGrpMsg = createAsyncThunk(
	"chat/grp/post",
	async ({ type, id, text }, thunkApi) => {
		console.log({ type, id, text });
		const response = await Api.postChat({ type, id, text });
		thunkApi.dispatch(getAllGrpMsgs({ type, id }));
		return response.data;
	}
);
