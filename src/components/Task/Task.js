import "./Task.css";
import "../../App.css";
// Icons
import { FaCheck } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

// Task
export default function Task({ title, details }) {
  return (
    <div className="task-card">
      <div className="task-info">
        <h3>{title}</h3>
        <p>{details}</p>
      </div>
      <div className="action-buttons">
        <button style={{ border: "solid 2px green", color: "green" }}>
          <FaCheck />
        </button>
        <button style={{ border: "solid 2px blue", color: "blue" }}>
          <MdEdit />
        </button>
        <button style={{ border: "solid 2px red", color: "red" }}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
}
