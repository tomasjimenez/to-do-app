import React from "react";

const Task = (props) => {
  return (
    <div className="card">
      <h1>{props.title}</h1>
      <p>Prioridad:{props.priority}</p>
      <small>Time: {props.time}</small>
      <p>{props.done}</p>
      <div className="row">
        <div className="col-3">
          <button type="button" className="btn btn-danger">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
