import { FaExternalLinkAlt } from "react-icons/fa";
import "./Navbar.css";
export default function Navbar() {
  return (
    <nav>
      <div className="brand">
        <FaExternalLinkAlt className="icon" />
        <h1>React Routes </h1>
      </div>
      <div className="list">
        <ul>
          <li className="posts-page">Posts Page</li>
          <li className="post-details">Post Details</li>
        </ul>
      </div>
    </nav>
  );
}
