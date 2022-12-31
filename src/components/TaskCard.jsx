import { useContext } from "react";
import { TaskContext } from "../context/TaskContext.jsx";

export default function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <article className="cursor-default bg-purple-800 text-white rounded-md p-2 flex flex-col gap-4">
      <h3 className="text-xl font-bold text-yellow-400">
        {task.title}
      </h3>
      <p className="text-lg text-justify text-gray-300 break-words">
        {task.description}
      </p>
      <button
        type="button"
        onClick={() => {
          deleteTask(task.id);
        }}
        className="h-10 w-20 bg-blue-700 p-2 rounded self-center hover:bg-red-600"
      >
        Delete
      </button>
    </article>
  );
}
