import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center bg-gray-800 px-4 py-2 rounded-lg"
        >
          <span className="text-gray-200">{todo.text}</span>
          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="text-red-400 hover:text-red-600 font-bold"
          >
            <img
              src="https://img.icons8.com/3d-fluency/94/trash.png"
              width="25"
              height="20"
              alt="trash"
            />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Todos;
