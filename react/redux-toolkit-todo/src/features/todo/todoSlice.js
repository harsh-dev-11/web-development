import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

// A slice bundles together the reducer logic and actions
export const todoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    // Reducer to add a new todo
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    // Reducer to remove a todo
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// Exporting the actions so they can be dispatched elsewhere in the app
export const { addTodo, removeTodo } = todoSlice.actions;

// Exporting the reducer to be included in the store
export const todoReducer = todoSlice.reducer;
