import { useParams } from "react-router-dom";
import "./PostDetails.css";
import { postsData } from "../../data";

export default function PostDetails() {
  const { postId } = useParams();
  const post = postsData.find((p) => {
    return p.id === parseInt(postId);
  });
  // console.log(post);
  if (!post) {
    return <h2 style={{ color: "red" }}>Post not found !!! </h2>;
  }
  return (
    <div>
      <h1>Post Details</h1>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
