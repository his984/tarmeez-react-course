import { useState } from "react";
import "./App.css";
import Modal from "./Components/Modal";

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
  const [errorMessage, setErrorMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loanInputs, setLoanInput] = useState({
    name: "test",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  });
  // handleFormSubmit
  function handleFormSubmit(event) {
    event.preventDefault();
    setErrorMessage(null);
    console.log("Submitted!!");
    const { age, phoneNumber } = loanInputs;
    if (age < 18 || age > 100) {
      setErrorMessage("The age is not allowed!");
    } else if (phoneNumber.length < 10 || phoneNumber.length > 12) {
      setErrorMessage("Phone number format is incorrect");
    }
    setShowModal(true);
  }
  // btnIsDisabled
  const btnIsDisabled =
    loanInputs.name === "" ||
    loanInputs.age === "" ||
    loanInputs.phoneNumber === "";
  // handle div click
  function handleDivClick() {
    if (showModal) {
      setShowModal(false);
    }
  }
  return (
    // Loan form container
    <div className="loan-form" onClick={handleDivClick}>
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
          <input
            type="checkbox"
            checked={loanInputs.isEmployee}
            onChange={(e) => {
              setLoanInput({
                ...loanInputs,
                isEmployee: e.target.checked,
              });
            }}
          ></input>
          <label>Employee *</label>
        </div>
        {/* Salary */}
        <div className="select-salary">
          <label>Salary * </label>
          <select
            value={loanInputs.salaryRange}
            onChange={(e) => {
              setLoanInput({
                ...loanInputs,
                salaryRange: e.target.value,
              });
            }}
          >
            <option>Option1</option>
            <option>Option2</option>
            <option>Option3</option>
          </select>
        </div>
        {/* HR */}
        <hr></hr>
        {/* Button */}
        <button
          className={btnIsDisabled ? "disabled" : ""}
          disabled={btnIsDisabled}
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </form>
      {/* Modal */}
      <Modal errorMessage={errorMessage} isVisible={showModal}></Modal>
    </div>
  );
}
