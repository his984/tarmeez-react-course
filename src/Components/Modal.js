import "../App.css";

export default function Modal({ isVisible, errorMessage = null }) {
  if (isVisible) {
    return (
      <div id="modal">
        <div id="modal-content">
          {/* <h2>The form has been submitted successfully!</h2> */}

          <h2 style={{ color: errorMessage ? "red" : "green" }}>
            {errorMessage != null
              ? errorMessage
              : "The form has been submitted successfully!"}
          </h2>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
