function TaskList({ tasks }) {
  return (
    <>
      {tasks.map((task) => (
        <section key={task.id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </section>
      ))}
    </>
  );
}

export default TaskList;
