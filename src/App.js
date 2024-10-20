import { useState } from "react";
import "./App.css";
// import Modal from "./Components/Modal";

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
  const [loanInputs, setLoanInput] = useState({
    name: "test",
    phoneNumber: "",
    age: "",
  });
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
          <label>Name * </label>
          <input
            type="text"
            value={loanInputs.name}
            onChange={(e) => {
              setLoanInput({ ...loanInputs, name: e.target.value });
            }}
          ></input>
        </div>
        {/* Phone Number */}
        <div className="form-row">
          <label>Phone number * </label>
          <input
            type="text"
            value={loanInputs.phoneNumber}
            onChange={(e) => {
              setLoanInput({
                ...loanInputs,
                phoneNumber: e.target.value,
              });
            }}
          ></input>
        </div>
        {/* Age */}
        <div className="form-row">
          <label>Age * </label>
          <input
            type="text"
            value={loanInputs.age}
            onChange={(e) => {
              setLoanInput({
                ...loanInputs,
                age: e.target.value,
              });
            }}
          ></input>
        </div>
        {/* Are you employee  */}
        <div className="employee-check">
          <input type="checkbox"></input>
          <label>Employee *</label>
        </div>
        {/* Salary */}
        <div className="select-salary">
          <label>Salary * </label>
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
      {/* Modal */}
      {/* <Modal></Modal> */}
    </div>
  );
}
