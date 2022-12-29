import React from "react";
import { useProject } from "../../hooks/useProject";

// styles
import "./Card.css";

const PersonalProject = () => {
  const { personalProjects } = useProject();
  console.log(personalProjects);

  return (
    <div className="cards">
      {personalProjects.map((project) => (
        <div className="card" key={project.name}>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <button className="btn">View Project</button>
        </div>
      ))}
    </div>
  );
};

export default PersonalProject;
