import { useParams } from "react-router-dom";
import { useContext } from "react";
import { postsContext } from "../Contexts/postContext";

export default function PostDetails({title, body}) {
  const posts = useContext(postsContext)
  const {postID} = useParams();

  const post = posts.find((p) => {

    return p.id === postID
  })
  console.log(post);
  return (
    <div>
      <h1>Post Details Page</h1>;
      <p></p>
    </div>
  );
}
