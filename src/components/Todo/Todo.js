import "./Todo.css";
import Task from "../Task/Task";
import { tasks } from "../../data";

export default function Todo() {
  const task = tasks.map((task) => {
    // console.log(task.id);
    return (
      <Task key={task.id} title={task.title} details={task.details}></Task>
    );
  });
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
        <button>Add New Task </button>
        <input type="text" />
      </div>
    </div>
  );
}
