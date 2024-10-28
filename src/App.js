import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
// APP
function App() {
  return (
    <div className="root">
      <div className="container">
        {/* Navbar */}
        <Navbar />
        {/* Routes */}
        <Routes>
          <Route path="/" element={<div></div>} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
