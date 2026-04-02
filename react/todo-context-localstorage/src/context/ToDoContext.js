import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    todo: [
        {
            id: 1,
            todo: "ToDo message",
            completed: false,
        }
    ],
    addToDo: (todo) => {},
    updateToDo: (id, toDo) => {},
    deleteToDo: (id) => {},
    toggleComplete: (id) => {},
});

// custom hook
export const useToDo = () =>{
    return useContext(ToDoContext);
}

export const TodoProvider = ToDoContext.Provider;