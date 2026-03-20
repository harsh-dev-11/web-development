import { useCallback, useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(17);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const handleCopyPassword = useCallback(() => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-[#1f2937] text-white">
      <h1 className="text-white text-center my-3 text-2xl font-medium">
        Password generator
      </h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-2 px-3 text-gray-700 bg-white"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={handleCopyPassword}
          className="outline-none bg-blue-600 text-white px-6 py-0.5 shrink-0 hover:bg-blue-700 transition-colors"
        >
          copy
        </button>
      </div>

      <div className="flex text-sm gap-x-6 items-center">
        {/* Slider and Length Display */}
        <div className="flex items-center gap-x-2">
          <input
            type="range"
            min={8}
            max={16}
            value={length}
            className="cursor-pointer accent-blue-600"
            onChange={(e) => setLength(e.target.value)}
          />
          <label className="text-[#fd7e14] font-medium whitespace-nowrap">
            Length: {length}
          </label>
        </div>

        {/* Numbers Checkbox */}
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            className="cursor-pointer"
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label
            htmlFor="numberInput"
            className="text-[#fd7e14] font-medium cursor-pointer"
          >
            Numbers
          </label>
        </div>

        {/* Characters Checkbox */}
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            className="cursor-pointer"
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label
            htmlFor="characterInput"
            className="text-[#fd7e14] font-medium cursor-pointer"
          >
            Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
