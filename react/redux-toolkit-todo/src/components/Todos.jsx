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
          className="flex justify-between items-center bg-gray-800 px-4 py-2 rounded-lg 
                 transition-all duration-300 hover:bg-gray-800 hover:scale-[1.02]"
        >
          <span className="text-gray-200">{todo.text}</span>

          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="p-1 rounded-md transition-all duration-200 
                   hover:bg-red-500/20 active:scale-90"
          >
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/office/40/multiply.png"
              alt="multiply"
              className="transition-all duration-200 hover:scale-110 hover:brightness-125"
            />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Todos;
