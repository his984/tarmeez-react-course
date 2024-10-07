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
  const [formInputs, setFormInput] = useState({
    name: "",
    email: "",
    generalInfo: "",
    isStudent: false,
  });
  //
  function handleCheckBoxChanged(event) {
    setFormInput({ ...formInputs, isStudent: event.target.checked });
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(formInputs);
      }}
    >
      <label>Name</label>
      <input
        value={formInputs.name}
        onChange={(event) => {
          setFormInput({ ...formInputs, name: event.target.value });
        }}
      />
      <hr></hr>

      <label>Email</label>

      <input
        value={formInputs.email}
        onChange={(event) => {
          setFormInput({ ...formInputs, email: event.target.value });
        }}
      />
      <hr></hr>
      <label>General Info</label>
      <textarea
        value={formInputs.generalInfo}
        onChange={(event) => {
          setFormInput({ ...formInputs, generalInfo: event.target.value });
        }}
      />
      <hr></hr>
      <label>Are you student?</label>
      <input
        type="checkbox"
        checked={formInputs.isStudent}
        onChange={handleCheckBoxChanged}
      ></input>
      <hr></hr>
      <button type="submit">Submit</button>
    </form>
  );
}
