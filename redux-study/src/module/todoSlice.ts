import { createSlice } from "@reduxjs/toolkit";

export interface todoInter {
  todoList: string [],
}

const initialState: todoInter={
  todoList: ['asdasdasdsa','123123'],
}


export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers:{
    setTodo(state, action) {
      state.todoList = action.payload;
    }
  }
})

export const { setTodo } = todoSlice.actions;