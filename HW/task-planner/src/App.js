import { useState } from "react";
import TaskList from "./TaskList";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState("Add a task to get started!");
  const [bgColor, setBgColor] = useState("white");

  const handleAddTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setMessage(`Task added: ${task}!`);
    setTask("");
    setBgColor("lightblue");
  };

  return (
    <div
      className="container mt-5 p-4"
      style={{ backgroundColor: bgColor }}
    >
      <div className="card p-4 mb-4">
        <h2 className="mb-3">Task Planner</h2>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter task name"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button
          className="btn btn-primary mb-3"
          onClick={handleAddTask}
        >
          Add Task
        </button>

        {/* Child Component */}
        <TaskList tasks={tasks} message={message} />
      </div>
    </div>
  );
}

export default App;