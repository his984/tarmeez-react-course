import "./Todo.css";
import Task from "../Task/Task";
import { useState } from "react";
import { nanoid } from "nanoid";
import { TodosContext } from "../../context/todosContext";
import { useContext } from "react";

// Todo
export default function Todo() {
  const { todos, setTodos } = useContext(TodosContext);
  const [titleInput, setTitleInput] = useState("");
  const task = todos.map((task) => {
    // console.log(task.id);
    return <Task key={task.id} task={task}></Task>;
  });
  function handleAddClick() {
    // Check if input is empty
    if (titleInput.trim() === "") {
      alert("Please enter a task title.");
      return;
    }
    const newTask = {
      id: nanoid(),
      title: titleInput,
      details: "",
      isComplied: false,
    };
    setTodos([...todos, newTask]);
    setTitleInput("");
  }

  return (
    <div className="todo-card">
      <div className="title">
        <h1>My Tasks</h1>
        <hr />
        <div className="btn">
          <button>All</button>
          <button>Done</button>
          <button>Todo</button>
        </div>
      </div>
      {task}
      <div className="input">
        <button onClick={handleAddClick}>Add New Task </button>
        <input
          placeholder="Enter task title"
          type="text"
          value={titleInput}
          onChange={(e) => {
            setTitleInput(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
