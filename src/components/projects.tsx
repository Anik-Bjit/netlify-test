import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Projects = () => {
  const [name, setName] = useState("");

  const [projectsArray, setProjectsArray] = useState([]);

  const inputProjects = (e) => {
    console.log("changes", e.target.value);
    setName(e.target.value);
  };

  const insertProjects = (e) => {
    e.preventDefault();
    setProjectsArray([...projectsArray, name]);
    setName("");
  };

  const removeProjects = (keyNumber) => {
    const newRemoveProjects = [...projectsArray];
    newRemoveProjects.splice(keyNumber, 1);
    setProjectsArray(newRemoveProjects);
  };
  return (
    <div>
      <form>
        <label>
          Input Projects name:
          <input type="text" value={name} onChange={inputProjects} />
        </label>
        <button onClick={insertProjects} disabled={!name.length}> Insert </button>
      </form>

      {projectsArray.map((value, key) => {
        return (
          <ul>
            <li>
              {value}{" "}
              <button onClick={(e) => removeProjects(key)}>remove</button>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Projects;
