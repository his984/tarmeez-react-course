// Import Components
import Task from "./Task";

export default function Todo() {
  return (
    <div className="todo-card">
      <h1>My Tasks</h1>
      <hr />
      <div className="btn">
        <button>All</button>
        <button>Done</button>
        <button>Todo</button>
      </div>
      <Task />
      <div className="input">
        <button>Add New Task </button>
        <input type="text" />
      </div>
    </div>
  );
}
