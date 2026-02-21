import { useState } from "react";

function App() {
  return <ColorPicker />;
}

function ColorPicker() {
  const [color, setColor] = useState("#ffffff");

  // handle change event
  function handleChangeColor(event) {
    setColor(event.target.value);
  }

  return (
    <div id="color-picker-container" style={{ backgroundColor: color }}>
      <input
        type="color"
        value="#ffffff"
        id="color-input"
        onChange={handleChangeColor}
      />
    </div>
  );
}

export default App;
