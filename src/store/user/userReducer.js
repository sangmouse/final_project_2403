/*
    loading : user/getList/loading,
    successed : user/getList/successed,
    failed : user/getList/failed,
*/

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserList = createAsyncThunk("user/getList", async () => {
  const response = await axios.get("http://localhost:3000/users");
  return response.data;
});

export const deleteUserByID = createAsyncThunk(
  "user/deleteByID",
  async (id) => {
    await axios.delete(`http://localhost:3000/users/${id}`);
  }
);

const initialState = {
  status: "idle",
  userList: [],
  error: "",
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUserList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserList.fulfilled, (state, action) => {
        state.status = "fullfilled";
        state.userList = [...action.payload];
      })
      .addCase(getUserList.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export default userReducer.reducer;
