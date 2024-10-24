import { Link } from "react-router-dom";
import { postsContext } from "../Contexts/postContext";
import { useContext } from "react";

// Posts
export default function Posts() {
  const posts = useContext(postsContext);
  const postsList = posts.map((post) => {
    return (
      <Link key={post.id} to={`/postDetails/${post.id}`}>
        <div className="post">
          <h1>{post.title}</h1>
          <p>{post.date}</p>
        </div>
      </Link>
    );
  });
  return <div>{postsList}</div>;
}
