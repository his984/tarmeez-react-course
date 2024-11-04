import "./Task.css";
import "../../App.css";
import { TodosContext } from "../../context/todosContext";
import { useContext } from "react";

// Icons
import { FaCheck } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

// Task
export default function Task({ task }) {
  const { todos, setTodos } = useContext(TodosContext);
  // Handle Check
  function handleCheckClick() {
    setTodos(
      todos.map((t) => {
        if (t.id === task.id) {
          t.isComplied = !t.isComplied;
        }
        return t;
      })
    );
  }
  // Handle Delete
  function handleDeleteClick() {
    const updatedTodos = todos.filter((t) => t.id !== task.id);
    setTodos(updatedTodos);
  }

  return (
    <div className="task-card">
      <div className="task-info">
        <h3>{task.title}</h3>
      </div>
      <div className="action-buttons">
        {/* Check */}
        <button
          style={{
            border: "solid 1px green",
            color: task.isComplied ? "white" : "green",
            backgroundColor: task.isComplied ? "green" : "white",
          }}
          onClick={handleCheckClick}
        >
          <FaCheck />
        </button>
        {/* Edit */}
        <button style={{ border: "solid 1px blue", color: "blue" }}>
          <MdEdit />
        </button>
        {/* Delete */}
        <button
          style={{ border: "solid 1px red", color: "red" }}
          onClick={handleDeleteClick}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
}
