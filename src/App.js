// import { Children } from "react";
import "./App.css";
import Header from "./Components/Header";
import Post from "./Components/Post";
// import Button from "./Components/Button";
import SideMenu from "./Components/SideMenu";

function App() {
  // Posts
  const posts = [
    {
      id: 1,
      title: "Title 1",
      email: "test1@cc.com",
      text: `1- totam ratione voluptas quod exerc
      quasi aliquam eligendi, placeat qui corporis`,
      children: [<button key="001">Click Me</button>],
    },
    {
      id: 2,
      title: "Title 2",
      email: "test2@cc.com",
      text: `2- totam ratione voluptas quod exerc
    quasi aliquam eligendi, placeat qui corporis`,
    },
    {
      id: 3,
      title: "Title 3",
      email: "test3@cc.com",
      text: `3- totam ratione voluptas quod exerc quasi aliquam eligendi, placeat qui corporis`,
      children: [
        <div key="002">
          <h2>test</h2>
          <span>😀🌴😊✅</span>
        </div>,
      ],
    },
    {
      id: 4,
      title: "Title 4",
      email: "test4@test.com",
      text: `4- totam ratione voluptas quod exerc quasi aliquam eligendi, placeat qui corporis`,
      children: [
        <h1 key="003" style={{ color: "red" }}>
          I'm a children!!
        </h1>,
      ],
    },
  ];
  // postsList
  const postsList = posts.map((post) => (
    <Post key={post.id} title={post.title} email={post.email} text={post.text}>
      {post.children}
    </Post>
  ));
  return (
    <div className="App">
      <Header></Header>

      <div className="content">
        <div className="posts-container">{postsList}</div>
        <SideMenu></SideMenu>
      </div>
    </div>
  );
}

export default App;
