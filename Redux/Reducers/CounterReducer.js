import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const Slice = createSlice({
  name: "count",
  initialState,
  reducers: {
    incrementCount: (state, action) => {
      state.count = state.count + 1;
    },
  },
});

export const { incrementCount } = Slice.actions;
export const CounterReducer = Slice.reducer;
