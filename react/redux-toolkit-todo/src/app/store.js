import { configureStore } from "@reduxjs/toolkit";

// Importing the todoReducer we created in todoSlice.js
// This reducer contains the logic for handling todos (add/remove)
import { todoReducer } from "../features/todo/todoSlice";

// Creating the Redux store
// The store holds the entire state tree of the application
// Here we pass in our todoReducer to manage the "todos" state
export const store = configureStore({
  reducer: todoReducer,
});
