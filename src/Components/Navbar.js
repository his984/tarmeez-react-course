import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <h1>Navbar</h1>
      {/* Link */}
      <Link to="/">
        {/* Posts Page */}
        <button>Posts Page</button>
      </Link>
      <Link to="/postDetails">
        {/*Post Details */}
        <button>Post Details</button>
      </Link>
    </div>
  );
}
