import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        title: action.payload,
      });
    },
    delTodo(state, action) {
      state.todos = state.todos.filter((elem) => elem.id !== action.payload.id);
    },
    setTodo(state, action) {
      const todo1 = state.todos.find((elem) => elem.id === action.payload.id);
      todo1.title = action.payload.title;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, delTodo, setTodo } = todoSlice.actions;

export default todoSlice.reducer;
