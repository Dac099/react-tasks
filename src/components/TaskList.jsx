import TaskCard from "./TaskCard.jsx";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext.jsx";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return (
      <h1 className="text-center text-gray-700 italic">Empty task list</h1>
    );
  }

  return (
    <section className="my-5 w-11/12 mx-auto">

      <h1 className="text-5xl mb-4 font-mono text-center text-indigo-600 font-black">
        My Tasks
      </h1>

      <article className="grid grid-cols-4 gap-5">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </article>
      
    </section>
  );
}

export default TaskList;
