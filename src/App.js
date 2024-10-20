// import { useState } from "react";
import "./App.css";

// APP
function App() {
  return (
    <div className="App">
      <LoanForm></LoanForm>
    </div>
  );
}
export default App;

// Loan Form
function LoanForm() {
  return (
    // Loan form container
    <div className="loan-form">
      {/* form */}
      <form>
        {/* H1 */}
        <h1>Loan Request Form</h1>
        {/* HR */}
        <hr></hr>
        {/* Name */}
        <div className="form-row">
          <label>Name: </label>
          <input type="text"></input>
        </div>
        {/* Phone Number */}
        <div className="form-row">
          <label>Phone number: </label>
          <input type="text"></input>
        </div>
        {/* Age */}
        <div className="form-row">
          <label>Age: </label>
          <input type="text"></input>
        </div>
        {/* Are you employee  */}
        <div className="employee-check">
          <input type="checkbox"></input>
          <label>Are you employee</label>
        </div>
        {/* Salary */}
        <div className="select-salary">
          <label>Salary: </label>
          <select>
            <option>Option1</option>
            <option>Option2</option>
            <option>Option3</option>
          </select>
        </div>
        {/* HR */}
        <hr></hr>
        {/* Button */}
        <button>Submit</button>
      </form>
    </div>
  );
}
