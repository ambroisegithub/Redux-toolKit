import { createSlice } from "@reduxjs/toolkit";
//useSelector() Hook allows us to read data fron the redux store.
// user dispatchDispatch() hook is used to send actions to the store , triggering updates to the application state.
//In simple terms, it lets you change the state in your Redux store from within your react components.

export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
