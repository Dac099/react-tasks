import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext.jsx";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === "") {
      alert(`What's the task title`);
      return;
    }

    const taskData = {
      title,
      description,
    };
    createTask(taskData);

    setTitle("");
    setDescription("");
  };

  return (
    <section className="p-3">
      <form
        onSubmit={handleSubmit}
        className="w-11/12 mx-auto mb-7 relative flex flex-col gap-4 max-w-md"
      >
        <label
          htmlFor="task-title"
          className="block absolute left-2 top-[-12px] bg-indigo-50 px-2 text-violet-500"
        >
          Task Title
        </label>

        <input
          className="h-14 border-4 rounded-lg border-violet-500 bg-indigo-50 focus-visible: outline-0 p-3 text-gray-600 text-lg tracking-wider"
          name="task-title"
          type="text"
          id="task-title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />

        <label
          htmlFor="task-description"
          className="w-min relative left-2 top-[28px] bg-indigo-50 px-2 text-violet-500"
        >
          Description
        </label>

        <textarea
          title="task-description"
          id="task-descriptipn"
          name="task-description"
          className="h-[120px] border-4 rounded-lg border-violet-500 bg-indigo-50 focus-visible: outline-0 p-3 text-gray-600 text-lg tracking-wider resize-none"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />

        <button
          id="task-btn"
          className="h-10 bg-indigo-700 text-yellow-400 text-xl font-semibold rounded-lg px-7 mx-auto hover:bg-yellow-400 hover:text-indigo-700"
          type="submit"
        >
          Create
        </button>
      </form>
    </section>
  );
}
