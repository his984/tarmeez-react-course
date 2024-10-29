import { FaExternalLinkAlt } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
      <div className="brand">
        <FaExternalLinkAlt className="icon" />
        <h1>React Routes </h1>
      </div>
      <div className="list">
        <ul>
          <Link className="link" to="/">
            <li className="/">Home</li>
          </Link>
          <Link className="link" to="/posts">
            <li className="posts-page">Posts Page</li>
          </Link>
          <Link className="link" to="/post-details">
            <li className="post-details">Post Details</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
