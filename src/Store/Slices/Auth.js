import { createSlice } from "@reduxjs/toolkit";

const jsonValue = localStorage.getItem("CHAT-APP-CLONE-USER");

const initialState = {
	loading: false,
	error: null,
	currentUser: jsonValue ? JSON.parse(jsonValue) : null,
};

const AuthSlice = createSlice({
	name: "user",
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
