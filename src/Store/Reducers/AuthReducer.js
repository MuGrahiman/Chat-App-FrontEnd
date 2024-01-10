import { createReducer } from "@reduxjs/toolkit";
import { registerUser } from "../Thunks/AuthThunk";

const initialState = {
  status: 'idle', // loading: 'idle' | 'pending' | 'succeeded' | 'failed'
  error: null,
  user: null,
};

 const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(
      registerUser.pending((state, action) => {
        state.status = 'pending';
      })
    )
    .addCase(
      registerUser.fulfilled((state, action) => {
        state.user = action.payload;
        state.status = 'succeeded';
      })
    )
    .addCase(
      registerUser.rejected((state, action) => {
        state.error = action.payload;
        state.status = 'failed';
      })
    );
});

export default authReducer