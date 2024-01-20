import { configureStore } from '@reduxjs/toolkit';
import userSlice from './Slices/Auth';
import authReducer from './Reducers/AuthReducer';

export const store = configureStore({
	reducer: { auth: authReducer, user: userSlice.reducer },
});

export * from './Thunks/AuthThunk';
export const { addUser, removeUser } = userSlice.actions;
