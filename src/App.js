import { useState } from "react";
import "./App.css";

// APP
function App() {
  return (
    <div className="App">
      <MyButton></MyButton>
    </div>
  );
}
export default App;

function MyButton() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return <button onClick={handleClick}>Clicked {count} times</button>;
}
