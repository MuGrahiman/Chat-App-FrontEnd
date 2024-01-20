import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	loading: false,
	error: null,
	currentUser: null,
};

const AuthSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addUser: (state, action) => {
			state.currentUser = action.payload;
		},

		removeUser: (state, action) => {
			state.currentUser = null;
		},
	},
});

export default AuthSlice;
