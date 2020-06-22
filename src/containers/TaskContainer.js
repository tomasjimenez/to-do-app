import React, { useEffect, useState } from "react";
import Task from "../components/Task";
import Navbar from "../components/Navbar";
import axios from "axios";

const TaskContainer = () => {
  // Aqui declaramos estado...valor inicial
  const [tasks, setTasks] = useState({});
  const ENDPOINT = "https://to-do-devf-tomas.firebaseio.com/task.json";

  // crear metodos dentro de mi componente

  const getTasks = () => {
    axios
      .get(ENDPOINT)
      .then((body) => setTasks(body.data))
      .catch((error) => alert(error));
  };

  //Esto se ejecuta cuando se monta el componente
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="bn-light">
      <Navbar />
      <div className="container">
        <h1>Mis Tareas</h1>
        {Object.keys(tasks).map((id) => (
          <Task
            key={tasks[id].title}
            id={id}
            title={tasks[id].title}
            done={tasks[id].done}
            priority={tasks[id].priority}
            time={tasks[id].time}
            getTasks={getTasks}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskContainer;
