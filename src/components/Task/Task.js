import "./Task.css";
import "../../App.css";
import { TodosContext } from "../../context/todosContext";
import { useContext, useState } from "react";
import EditFormDialog from "../EditFormDialog/EditFormDialog";

// Icons
import { FaCheck } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import AlertDialog from "../AlertDialog/AlertDialog";

// Task
export default function Task({ task }) {
  const { todos, setTodos } = useContext(TodosContext);
  const [open, setOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
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
  // Handle Edit
  const handleEditSubmit = (newTitle) => {
    setTodos(
      todos.map((t) => {
        if (t.id === task.id) {
          t.title = newTitle;
        }
        return t;
      })
    );
    setIsEditDialogOpen(false); // إغلاق نافذة التحرير بعد التعديل
  };

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
        <button
          style={{ border: "solid 1px blue", color: "blue" }}
          onClick={() => setIsEditDialogOpen(true)}
        >
          <MdEdit />
        </button>
        <EditFormDialog
          open={isEditDialogOpen}
          setOpen={setIsEditDialogOpen}
          currentTitle={task.title}
          onSubmit={handleEditSubmit}
        />
        {/* Delete */}
        <button
          style={{ border: "solid 1px red", color: "red" }}
          onClick={() => setOpen(true)}
        >
          <MdDelete />
        </button>
        <AlertDialog
          open={open}
          setOpen={setOpen}
          onConfirm={handleDeleteClick}
          message="Are you sure you want to delete this task?"
        />
      </div>
    </div>
  );
}
