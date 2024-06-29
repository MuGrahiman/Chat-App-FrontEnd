import { createAsyncThunk } from "@reduxjs/toolkit";
import * as Api from "./API";

export const getChat = createAsyncThunk("chat/get", async (chatData, thunkApi) => {
	try {
		const response = await Api.getChat(chatData);
		return response.data;
	} catch (error) {
		return thunkApi.rejectWithValue(
			error?.response?.data?.message ||
				error?.response?.message ||
				error?.message ||
				"something went wrong"
		);
	}
});

// export const postChat = createAsyncThunk(
// 	"chat/post",
// 	async ({ type, id, text }, thunkApi) => {
// 		const response = await Api.postChat({ type, id, text });
// 		thunkApi.dispatch(getChat({ type, id }));
// 		return response.data;
// 	}
// );
