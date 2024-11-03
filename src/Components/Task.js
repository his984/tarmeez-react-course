// Style
import "../App.css";
// Icons
import { FaCheck } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

// Task
export default function Task() {
  return (
    <div className="task-card">
      <div className="task-info">
        <h3>Task Name</h3>
        <p>
          {" "}
          Task Details Suspendisse accumsan tortor quis turpis. Sed ante.
          Vivamus tortor. Duis mattis egestas metus.
        </p>
      </div>
      <div className="action-buttons">
        <button style={{ border: "solid 3px green", color: "green" }}>
          <FaCheck />
        </button>
        <button style={{ border: "solid 3px blue", color: "blue" }}>
          <MdEdit />
        </button>
        <button style={{ border: "solid 3px red", color: "red" }}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
}
