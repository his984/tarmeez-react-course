import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MyForm></MyForm>
    </div>
  );
}

export default App;

function MyForm() {
  const [formInputs, setFormInput] = useState({ city: "", status: "" });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(formInputs);
      }}
    >
      <select
        value={formInputs.city}
        onChange={(e) => {
          setFormInput({ ...formInputs, city: e.target.value });
        }}
      >
        <option>LUND</option>
        <option>MALMO</option>
        <option>DAMASCUS</option>
      </select>
      <hr></hr>
      <div>
        <input
          value="student"
          type="radio"
          name="status"
          checked={formInputs.status === "student"}
          onChange={(e) => {
            setFormInput({ ...formInputs, status: e.target.value });
          }}
        />
        Student
        <input
          value="teacher"
          type="radio"
          name="status"
          checked={formInputs.status === "teacher"}
          onChange={(e) => {
            setFormInput({ ...formInputs, status: e.target.value });
          }}
        />
        Teacher
      </div>
      <hr></hr>
      <button type="submit">Submit</button>
    </form>
  );
}
