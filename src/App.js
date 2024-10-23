import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
// APP
function App() {
  return (
    <div className="root">
      <Navbar></Navbar>
      {/* Routs */}
      <Routes>
        <Route
          path="/"
          element={
            // Add component here! as element
            <div>
              <h1>Home page</h1>
            </div>
          }
        />
        <Route path="/hello" element={<h1>Hello first Route!</h1>} />
      </Routes>
    </div>
  );
}
export default App;
