import { postsData } from "../../data";
import './Posts.css'

export default function Posts() {
  return (
    <div className="posts">
      <h1>Posts Page</h1>
      {postsData.map((post) => {
        return (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <h3>{post.id}</h3>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}
