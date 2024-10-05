import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MyInput></MyInput>
    </div>
  );
}

export default App;

function MyInput() {
  const [inputValue, setInputValue] = useState("");
  function handleInputChange(event) {
    console.log(event);
    setInputValue(event.target.value);
  }
  return (
    <div>
      <label>Input</label>
      <input value={inputValue} onChange={handleInputChange} />
    </div>
  );
}
