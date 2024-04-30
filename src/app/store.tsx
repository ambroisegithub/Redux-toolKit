import { configureStore } from "@reduxjs/toolkit";
// slice is piece of strore state and correspoding reducer logic  to update that state.Slices are a wayy to organize our Redux store by breaking it down into smaller, more manageable parts.
//  And in the context of of redux toolkit a slice is like a smaller part of your application's overall state and the instructions on how to change or update thar specific part.
// Reudcers  are like an instructions on what to do with each slice of the cake  so in our context it shows how the information in particular slice can be changed or updated.
// Store is a central place where the state of our application is stored and it can be created using the configureStore function and holds the entire state of our applocation.
// slice is like smaller part of your application's overall state  and instructions on how to change or update that specific part.
export const store = configureStore({
  reducer: {},
});
