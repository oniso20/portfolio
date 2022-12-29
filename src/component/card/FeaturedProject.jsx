import React from "react";
import { useProject } from "../../hooks/useProject";

// styles
import "./Card.css";

const FeaturedProject = () => {
  const { featuredProjects } = useProject();
  console.log(featuredProjects);

  return (
    <div className="cards">
      {featuredProjects.map((project) => (
        <div className="card" key={project.name}>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <button className="btn">View Project</button>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProject;
