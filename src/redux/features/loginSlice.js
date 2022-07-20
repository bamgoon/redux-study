import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import loginApi from "services/loginApi";

const initialState = {
  loading: false,
  isLoggedIn: false,
  isError: false,
  name: "null",
  role: null,
};

export const login = createAsyncThunk(
  "/auth/login",
  async ({ params }, thunkAPI) => {
    const response = await loginApi.login(params);
    return response.data;
  }
);

export const loginSlice = createSlice({
  name: "user",

  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      console.log("pending");
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.isError = false;
      state.name = action.payload?.name;
      state.role = action.payload?.role;
      console.log("fulfilled");
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.isError = true;
      console.log("rejected");
    });
  },
});

export const loginReducer = loginSlice.reducer;
