import { useState } from "react";
import "./App.css";

// APP
function App() {
  return (
    <div className="App">
      <MyForm></MyForm>
    </div>
  );
}
export default App;

// My Form
function MyForm() {
  const [addNewDevice, setAddNewDevice] = useState("");
  const [newDevice, setNewDevice] = useState([
    "iPhone 12",
    "Samsung Galaxy S21",
    "Google Pixel 5",
    "OnePlus 9",
    "Xiaomi Mi 11",
  ]);
  // Function handle adding new device
  function handleAddNewDevice() {
    if (addNewDevice.trim() !== "") {
      setNewDevice([...newDevice, addNewDevice]);
      setAddNewDevice(""); // Clear input field after adding
    }
  }
  // Devices list
  const devicesList = newDevice.map((device) => {
    return (
      <option key={device} value={device}>
        {device}
      </option>
    );
  });

  return (
    <div>
      <label>
        Devices list:
        <select>{devicesList}</select>
      </label>

      <label>
        Add new device
        <input
          type="text"
          value={addNewDevice}
          onChange={(e) => {
            return setAddNewDevice(e.target.value);
          }}
        />
      </label>
      <button onClick={handleAddNewDevice}>Add new device</button>
    </div>
  );
}
