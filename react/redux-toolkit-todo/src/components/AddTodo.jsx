import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = React.useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(addTodo(input));
    console.log(input);
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="flex items-center gap-4 w-full">
      <input
        type="text"
        className="flex-1 bg-gray-800 rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 text-gray-100 px-4 py-2 outline-none transition-all duration-200"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        type="submit"
        className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-lg font-medium transition duration-200"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
