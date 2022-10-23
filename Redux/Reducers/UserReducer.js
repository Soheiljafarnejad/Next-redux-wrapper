import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userClient: ["user 1", "user 2"],
  userSsr: [],
};
const Slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserInfo: (state, action) => {
      state.userClient = [...state.userClient, action.payload];
    },
    getUserInfo: (state, action) => {
      state.userSsr = action.payload;
    },
  },
});

export const { getUserInfo, addUserInfo } = Slice.actions;
export const UserReducer = Slice.reducer;
