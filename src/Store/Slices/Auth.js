import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  error: null,
  user: null,
};
const AuthSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => (state.user = action.payload),
    removeUser: (state, action) => (state.user = action.payload),
  },
  // extraReducers: (builder) =>
  //   builder.addCase(registerUser.pending, (state) => {
  //     state.loading = true;
  //   }),
});

export const { addUser,removeUser } = AuthSlice.actions;
export default AuthSlice.reducer;
