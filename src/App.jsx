import React from "react";
import TaskList from "./components/TaskList.jsx";
import TaskForm from "./components/TaskForm.jsx";

export default function App() {
  return (
    <main className="bg-indigo-50 h-screen font-sans p-3">
      <TaskForm />
      <TaskList />
    </main>
  );
}
