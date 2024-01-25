import { createAsyncThunk } from '@reduxjs/toolkit';
import * as Api from './API';
import { addUser } from '..';

export const userRegister = createAsyncThunk(
	'auth/register',
	async (authData, thunkApi) => {
		console.log('response');
		console.log(authData);

		try {
			const response = await Api.userRegister(authData);
			return response.data;
		} catch (error) {
			return thunkApi.rejectWithValue(
				error?.response?.data?.message ||
					error?.response?.message ||
					error?.message ||
					'something went wrong'
			);
		}
	}
);

export const userResendOtp = createAsyncThunk('auth/resend', async (id) => {
	const response = await Api.userResendOtp(id);
	return response.data;
});

export const userPostOTP = createAsyncThunk(
	'auth/otp',
	async (authData, thunkApi) => {
		try {
			const response = await Api.userPostOTP(authData);
			console.log(response);
			return response.data;
		} catch (error) {
			return thunkApi.rejectWithValue(
				error?.response?.data?.message ||
					error?.response?.message ||
					error?.message ||
					'something went wrong'
			);
		}
	}
);

export const userLogin = createAsyncThunk(
	'auth/login',
	async (authData, thunkApi) => {
		try {
			const response = await Api.userLogin(authData);
			console.log(response);
		
			return thunkApi.dispatch(addUser(response.data));
		} catch (error) {
			return thunkApi.rejectWithValue(
				error?.response?.data?.message ||
					error?.response?.message ||
					error?.message ||
					'something went wrong'
			);
		}
	}
);

export const getAllUser = createAsyncThunk("auth/user", async () => {
	const response = await Api.getAllUser();
	return response.data;
});