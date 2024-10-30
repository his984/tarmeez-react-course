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
          <Route path="*" element={<h1>404 (Not Found !!)</h1>}></Route>
        </Routes>
      </div>f
    </div>
  );
}
export default App;
