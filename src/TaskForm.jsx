import { useState } from "react";

export default function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskData = {
      title,
      description,
    };
    createTask(taskData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task-title" className="task-title--label">
        Task Title
      </label>

      <input
        type="text"
        id="task-title"
        name="task-title"
        className="task-title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="task-description" className="task-description--label">
        Description
      </label>

      <textarea
        type="text"
        id="task-descriptipn"
        name="task-description"
        className="task-description"
        onChange={(e) => setDescription(e.target.value)}
      />

      <button id="task-btn" className="task-btn">
        Create
      </button>
    </form>
  );
}
