import React, { useState, useEffect } from "react";
import TaskList from "./TaskList.jsx";
import TaskForm from "./TaskForm.jsx";
import { tasks as data } from "./tasks.js";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);


  if(tasks.length === 0){
    return <h1>Without Tasks</h1>
  }

  function createTask(taskData) {
    taskData.id = tasks.length + 1;
    setTasks([...tasks, taskData]);
  }
  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} />
    </>
  );
}
