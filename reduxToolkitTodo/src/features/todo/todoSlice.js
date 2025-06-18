import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "Hello World"}]
}



// Slice ek reducer ka version hai, reducer kuch nhi bass ek functionality hai
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload  // payload ek object hai
            }
            state.todos.push(todo)
        }, // state yaha pe initial jo state hai uska access deta hai agar initially 10 todo hai apne pass to vo, vo dega. Aur removeTodo ke liye kuch id lagagi to vo values action mese melegi
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id != action.payload)
        },
    }
    // context api me sirf func declaration likhte the yaha redux toolkit me defination aur declaration dono likhe jate hai

})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer