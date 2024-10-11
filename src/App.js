import { useState } from "react";
import "./App.css";

// APP
function App() {
  return (
    <div className="App">
      <MyForm />
    </div>
  );
}
export default App;

// My Form
function MyForm() {
  // Devices List
  const [devices, setDevices] = useState([
    "iPhone 12",
    "Samsung Galaxy S21",
    "Google Pixel 5",
    "OnePlus 9",
    "Xiaomi Mi 11",
  ]);

  // New device input
  const [newDeviceName, setNewDeviceName] = useState("");

  // Function to handle adding new device
  function handleAddNewDevice() {
    if (newDeviceName.trim() !== "") {
      setDevices((prevDevices) => [...prevDevices, newDeviceName]);
      setNewDeviceName(""); // Clear input field after adding
    }
  }

  // Function to handle deleting a device
  function handleDeleteDevice(deviceToDelete) {
    setDevices(devices.filter((device) => device !== deviceToDelete));
  }

  // Devices list
  const devicesList = devices.map((device) => {
    return (
      <div className="items" key={device}>
        <span>{device}</span>
        <button
          style={{ width: "50px" }}
          type="button"
          onClick={() => handleDeleteDevice(device)}
        >
          Del
        </button>
      </div>
    );
  });

  return (
    <div className="container">
      <h1>Devices List</h1>
      <div>{devicesList}</div>

      <h2>Add New Device</h2>
      <input
        type="text"
        value={newDeviceName}
        onChange={(e) => setNewDeviceName(e.target.value)}
      />

      <button onClick={handleAddNewDevice} style={{ marginLeft: "10px" }}>
        Add Device
      </button>
    </div>
  );
}
