import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, payload) => {
      state.value = state.value + 1;
    },
    decrement: (state, payload) => {
      state.value  = state.value -1 ;
    },

    incremenByAmount: (state, action) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, incremenByAmount } = counterSlice.actions;

export default counterSlice.reducer;
