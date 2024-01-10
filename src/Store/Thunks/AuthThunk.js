import { createAsyncThunk } from "@reduxjs/toolkit";
import * as Api from "./API";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (authData) => {
    const response = await Api.registerUser(authData);
    console.log(response);
  }
);

export const loginUser = createAsyncThunk("auth/login", async (authData) => {
  const response = await Api.loginUser(authData);
  console.log(response);
});
