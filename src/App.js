import { useState } from "react";
import "./App.css";

// APP
function App() {
  return (
    <div className="App">
      <Scoreboard></Scoreboard>
    </div>
  );
}
export default App;

// Scoreboard
function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: "Adam",
    lastName: "Ali",
    score: 1,
  });
  // handle Plus click
  function handlePlusClick() {
    setPlayer({
      ...player,
      score: player.score + 1,
    });
  }
  // Handle first name change
  function handleFirstNameChange(e) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }
  // Handle last name change
  function handleLastNameChange(e) {
    setPlayer({
      ...player,
      lastName: e.target.value,
    });
  }
  return (
    <fieldset>
      <legend>
        <h1>Score Board</h1>
      </legend>
      <div className="score">
        <label className="score-counter">
          Score: <b>{player.score}</b>
          <button onClick={handlePlusClick}>+1</button>
        </label>
      </div>
      <div className="person-info">
        <div className="form-row">
          <label htmlFor="firstName">First Name:</label>
          <input
            id="firstName"
            type="text"
            value={player.firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="lastName">Last Name:</label>
          <input
            id="lastName"
            type="text"
            value={player.lastName}
            onChange={handleLastNameChange}
          />
        </div>
      </div>
    </fieldset>
  );
}
