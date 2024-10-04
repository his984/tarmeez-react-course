import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MyButton></MyButton>
    </div>
  );
}

export default App;

function MyButton() {
  console.log("Render!");
  const [name, setName] = useState("Hisham");
  function buttonClicked() {
    setName(name === "Hisham" ? "Ali" : "Hisham");
  }
  return (
    <div>
      <button onClick={buttonClicked}>Click Me</button>
      <h1>{name}</h1>
    </div>
  );
}
