import "./App.css";
import Header from "./Components/Header";
import Post from "./Components/Post";
// import Button from "./Components/Button";
import SideMenu from "./Components/SideMenu";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <div className="content">
        <div className="posts-container">
          <Post></Post>
          <Post></Post>
          <Post></Post>
        </div>
        <SideMenu></SideMenu>
      </div>
    </div>
  );
}

export default App;
