import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-danger">
      <span className="navbar-brand mb-0 h1 text-white">To_Do_List</span> 
      <a href="/create-task"><button type="button" className="btn btn-success" >
      Crear Tarea
    </button></a>
    </nav>
  );
};

export default NavBar;
