import { createAsyncThunk } from "@reduxjs/toolkit";
import * as Api from "./API";

export const getContacts = createAsyncThunk(
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


