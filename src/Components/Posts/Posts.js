import { postsData } from "../../data";
import "./Posts.css";
import { Link } from "react-router-dom";

export default function Posts() {
  return (
    <div className="posts">
      <h1>Posts</h1>
      {postsData.map((post) => {
        return (
          <Link key={post.id} to={`/post-details/${post.id}`}>
            <div className="post">
              <h2>{post.title}</h2>
              <h3>{post.id}</h3>
              <p>{post.body}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
