import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 6,
  value: {
    increment: 1,
    decrement: 1,
    multiplication: 4,
    division: 3,
    exponentiation: 2,
  },
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setValue: (state, action) => {
      const { operation, newValue } = action.payload;
      state.value[operation] = newValue;
    },
    increment: (state) => {
      state.count += state.value.increment;
    },
    decrement: (state) => {
      state.count -= state.value.decrement;
    },
    multiplication: (state) => {
      state.count *= state.value.multiplication;
    },
    division: (state) => {
      state.count /= state.value.division;
    },
    exponentiation: (state) => {
      state.count **= state.value.exponentiation;
    },
    reset: (state) => {
      state.count = 1;
    },
  },
});

export const {
  setValue,
  increment,
  decrement,
  multiplication,
  division,
  exponentiation,
  reset,
} = counterSlice.actions;

export default counterSlice.reducer;
