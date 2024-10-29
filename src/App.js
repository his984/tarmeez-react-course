import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Posts from "./Components/Posts/Posts";
import PostDetails from "./Components/PostDetails";
// APP
function App() {
  return (
    <div className="root">
      <div className="container">
        {/* Navbar */}
        <Navbar />
        {/* Routes */}
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>}></Route>
          <Route path="/posts" element={<Posts />} />
          <Route path="/post-details" element={<PostDetails />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
