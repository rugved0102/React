import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "Hello World", isEditable: false, liveEditText: ""}]
}

// Slice ek reducer ka version hai, reducer kuch nhi bass ek functionality hai
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,  // payload ek object hai // The text comes from the user
                isEditable: false,
                liveEditText: ''
            }
            state.todos.push(todo)
        }, // state yaha pe initial jo state hai uska access deta hai agar initially 10 todo hai apne pass to vo, vo dega. Aur removeTodo ke liye kuch id lagagi to vo values action mese melegi
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id != action.payload)
        },
        toggleEditable: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload)
            if(!todo.isEditable) {
                
                todo.liveEditText = todo.text
            }
            todo.isEditable = !todo.isEditable
        },
        editLiveText: (state, action) => {
            const {id, newText} = action.payload
            const todo = state.todos.find(todo => todo.id == id)
            if(todo) {
                todo.liveEditText = newText
            }
        },
        commitEdit: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload)
            if(todo) {
                todo.text = todo.liveEditText
                todo.isEditable = false;
            }
        }
    }
    // context api me sirf func declaration likhte the yaha redux toolkit me defination aur declaration dono likhe jate hai

})

export const { addTodo, removeTodo, toggleEditable, editLiveText, commitEdit } = todoSlice.actions

export default todoSlice.reducer