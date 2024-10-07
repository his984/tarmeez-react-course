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
  // The MyForm component which handles a simple form with name and email inputs.
  // useState hook is used to create formInputs state and setFormInput function to update the state.
  // The state is initialized with an object containing empty strings for "name" and "email" fields.
  const [formInputs, setFormInput] = useState({ name: "", email: "" });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(); // Prevent the default form submission behavior to avoid page reload.
        console.log(formInputs); // Log the formInputs state to the console when the form is submitted.
      }}
    >
      {/* Label for the "name" input field */}
      <label>Name</label>
      {/* Input field for the "name" value */}
      <input
        value={formInputs.name} // Set the value of the input to the "name" property from the formInputs state.
        onChange={(event) => {
          // Update the formInputs state when the user types into the input.
          // Spread the current formInputs state and update only the "name" property.
          setFormInput({ ...formInputs, name: event.target.value });
        }}
      />
      <hr></hr> 
      {/* Label for the "email" input field */}
      <label>Email</label>
      {/* Input field for the "email" value */}
      <input
        value={formInputs.email} // Set the value of the input to the "email" property from the formInputs state.
        onChange={(event) => {
          // Update the formInputs state when the user types into the input.
          // Spread the current formInputs state and update only the "email" property.
          setFormInput({ ...formInputs, email: event.target.value });
        }}
      />
      <hr></hr>
      <button type="submit">Submit</button>
    </form>
  );
}
