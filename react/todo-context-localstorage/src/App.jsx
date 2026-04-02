import React from "react";
import { TodoProvider } from "./context";
import TodoForm from './components/TodoForm';
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todos, setTodos] = React.useState([]);

  // context object functionality
  const addToDo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };
  const updateToDo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)),
    );
  };
  const deleteToDo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevToDo) => (prevToDo.id === id ? {...prevToDo, completed: !prevToDo.completed} : prevToDo)))
  }

  // local storage functionality
  React.useEffect(()=>{
    const localTodos = JSON.parse(localStorage.getItem("todos"));
    if(localTodos && localTodos.length > 0){
      setTodos(localTodos);
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider
      value={{ todos, addToDo, updateToDo, deleteToDo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id}
              className="w-full"
              >
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}
