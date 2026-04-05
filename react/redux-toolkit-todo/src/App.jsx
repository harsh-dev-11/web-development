import React from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="">
      <div className="w-full max-w-2xl bg-gray-800 shadow-2xl rounded-2xl p-6 space-y-6">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-indigo-400">
          Learn Redux Toolkit
        </h1>

        {/* Add Todo Section */}
        <div className="bg-gray-700 p-4 rounded-xl shadow-md">
          <AddTodo />
        </div>

        {/* Todos List Section */}
        <div className="bg-gray-700 p-4 rounded-xl shadow-md">
          <Todos />
        </div>
      </div>
    </div>
  );
}

export default App;
