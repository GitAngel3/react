function TaskList({ tasks, message }) {
  return (
    <div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>

      <p className="task-message">{message}</p>
    </div>
  );
}

export default TaskList;