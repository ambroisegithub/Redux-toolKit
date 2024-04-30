
// creating store
import { configureStore } from "@reduxjs/toolkit";
// // we export an object so that we can use it on other file
// export const store = configureStore({
//     reducer: {},  // we can use a lot reducers here  and within that reducer we passing property value of an object we what


// });

// adding slice into our store
import counterReducer from './features/counter/counterSlice';
//reducer property you can call it the name you want here I call it counter
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});