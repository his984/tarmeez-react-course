import "./App.css";
import Todo from "./components/Todo/Todo";
import { TodosContext } from "./context/todosContext";
import { tasks } from "./data";
import { useState } from "react";
import EditFormDialog from "./components/EditFormDialog/EditFormDialog";
// App
function App() {
  const [todos, setTodos] = useState(tasks);
  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      <div className="container">
        <div className="App">
          <Todo />
        </div>
        <EditFormDialog />
      </div>
    </TodosContext.Provider>
  );
}

export default App;
