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

  // Device being edited
  const [editingDevice, setEditingDevice] = useState(null);

  // Function to handle adding or updating a device
  function handleAddOrUpdateDevice() {
    if (newDeviceName.trim() !== "") {
      if (editingDevice !== null) {
        // Update the existing device
        setDevices((prevDevices) =>
          prevDevices.map((device) =>
            device === editingDevice ? newDeviceName : device
          )
        );
        setEditingDevice(null); // Reset editing mode
      } else {
        // Add new device
        setDevices((prevDevices) => [...prevDevices, newDeviceName]);
      }
      setNewDeviceName(""); // Clear input field after adding or updating
    }
  }

  // Function to handle deleting a device
  function handleDeleteDevice(deviceToDelete) {
    setDevices(devices.filter((device) => device !== deviceToDelete));
  }

  // Function to handle editing a device
  function handleEditDevice(device) {
    setNewDeviceName(device); // Set input field to the device name
    setEditingDevice(device); // Set the device to be edited
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
        {/* Edit Button */}
        <button
          style={{ width: "50px" }}
          type="button"
          onClick={() => handleEditDevice(device)}
        >
          Edit
        </button>
      </div>
    );
  });

  return (
    <div className="container">
      <h1>Devices List</h1>
      <div>{devicesList}</div>

      <h2>{editingDevice ? "Edit Device" : "Add New Device"}</h2>
      <input
        type="text"
        value={newDeviceName}
        onChange={(e) => setNewDeviceName(e.target.value)}
      />

      <button onClick={handleAddOrUpdateDevice} style={{ marginLeft: "10px" }}>
        {editingDevice ? "Update Device" : "Add Device"}
      </button>
    </div>
  );
}
