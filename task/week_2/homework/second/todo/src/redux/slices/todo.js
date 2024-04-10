import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {todo_arr:["basic1", "basic2"]},
    reducers: {
        addTodo : (state, action) => {
            state.todo_arr.push(action.payload);
        },
        editTodo : (state, action) => {
            const { index, newText } = action.payload;
            state.todo_arr[index] = newText;
        },
        deleteTodo : (state, action) => {
            const {index} = action.payload;
            state.todo_arr.splice(index, 1);
        }
    }
});

export const {addTodo, editTodo, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;