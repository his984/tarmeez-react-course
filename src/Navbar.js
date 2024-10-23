import "./App.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <h1>Navbar</h1>
      <Link to="/">
        <button>Home Page</button>
      </Link>
      <Link to="/hello">
        <button>Hello Page</button>
      </Link>
    </div>
  );
}
