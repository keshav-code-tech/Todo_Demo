import { React,createContext, useContext } from 'react';

export const Todo = createContext({
    todos: [
        {
            id: 123,
            todo: "Msg",
            todoCompleted:false,
        },
    ],
    todoEdite : (todo) => {},
    todoDelete : (id,todo) => {},
    todoToggol : (id) => {},
    updateTodo : (id,todo) => {},
});

export const Todo_Context = () => {
    return useContext(Todo);
}



