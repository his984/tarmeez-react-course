import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Posts from "./Components/Posts/Posts";
import PostDetails from "./Components/postDetails/PostDetails";
// APP
function App() {
  return (
    <div className="root">
      <div className="container">
        {/* Navbar */}
        <Navbar />
        {/* Routes */}
        <Routes>
          <Route path="/posts" element={<Posts />} />
          <Route path="/post-details/:postId" element={<PostDetails />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
