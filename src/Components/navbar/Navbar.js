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
          <li>
            <Link className="link" to="/posts">
              Posts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
