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
          <Post
            title={"Title 1"}
            email={"test@cc1.com"}
            text={`1- totam ratione voluptas quod exerc
                  quasi aliquam eligendi, placeat qui corporis`}
          ></Post>
          <Post
            title={"Title 2"}
            email={"test@cc2.com"}
            text={`2- totam ratione voluptas quod exerc
                quasi aliquam eligendi, placeat qui corporis`}
          ></Post>
          <Post
            title={"Title 3"}
            email={"test@cc3.com"}
            text={`3- totam ratione voluptas quod exerc
                quasi aliquam eligendi, placeat qui corporis`}
          ></Post>
        </div>
        <SideMenu></SideMenu>
      </div>
    </div>
  );
}

export default App;
